<script>
  import { base } from '$app/paths';

  /**
   * @typedef {{
   *   text: string;
   *   yesLabel?: string;
   *   noLabel?: string;
   * }} QuestionnaireQuestion
   *
   * @typedef {{
   *   title: string;
   *   questions: (string | QuestionnaireQuestion)[];
   * }} QuestionnaireCategory
   */

  /** @type {string} */
  export let title;
  /** @type {string} */
  export let introduction;
  /** @type {QuestionnaireCategory[]} */
  export let categories = [];
  /** @type {string} */
  export let businessModelLabel;
  /** @type {string} */
  export let businessModelPlaceholder;
  /** @type {string[]} */
  export let businessModelOptions = [];
  /** @type {string} */
  export let otherBusinessModelLabel = 'Other';
  /** @type {string} */
  export let selectBusinessModelText;
  /** @type {string} */
  export let yesLabel = 'Yes';
  /** @type {string} */
  export let noLabel = 'No';
  /** @type {string} */
  export let incompleteText = 'Answer every question to see your result.';
  /** @type {string} */
  export let resultsTitle = 'Results';
  /** @type {string} */
  export let answeredLabel = 'answered';
  /** @type {string} */
  export let downloadLabel = 'Download results';
  /** @type {string} */
  export let downloadingLabel = 'Preparing PDF...';
  /** @type {string} */
  export let downloadFilename = 'quick-scan-results.pdf';
  /** @type {string} */
  export let pdfDisclaimer;
  /** @type {string} */
  export let positiveResult;
  /** @type {string} */
  export let negativeResult;

  /** @type {(boolean | null)[]} */
  let answers = [];
  let selectedBusinessModel = '';
  /** @type {HTMLElement | null} */
  let pdfDocument = null;
  let isDownloading = false;

  $: questions = categories.flatMap((category) =>
    category.questions.map((question) => ({
      category: category.title,
      text: typeof question === 'string' ? question : question.text,
      yesLabel: typeof question === 'string' ? yesLabel : question.yesLabel ?? yesLabel,
      noLabel: typeof question === 'string' ? noLabel : question.noLabel ?? noLabel
    }))
  );
  $: if (answers.length !== questions.length) {
    answers = Array(questions.length).fill(null);
  }
  $: answeredCount = answers.filter((answer) => answer !== null).length;
  $: yesCount = answers.filter((answer) => answer === true).length;
  $: answersComplete = questions.length > 0 && answeredCount === questions.length;
  $: isComplete = Boolean(selectedBusinessModel) && answersComplete;
  $: yesPercentage = isComplete ? Math.round((yesCount / questions.length) * 100) : 0;
  $: hasPotential = isComplete && yesPercentage >= 50;

  /**
   * @param {number} index
   * @param {boolean} value
   */
  function selectAnswer(index, value) {
    answers[index] = value;
    answers = [...answers];
  }

  function handleBusinessModelChange() {
    answers = Array(questions.length).fill(null);
  }

  /**
   * @param {string | QuestionnaireQuestion} question
   * @param {boolean | null} answer
   */
  function getAnswerLabel(question, answer) {
    const selectedYesLabel =
      typeof question === 'string' ? yesLabel : question.yesLabel ?? yesLabel;
    const selectedNoLabel =
      typeof question === 'string' ? noLabel : question.noLabel ?? noLabel;

    return answer === true ? selectedYesLabel : selectedNoLabel;
  }

  async function downloadResults() {
    if (!isComplete || !pdfDocument || isDownloading) {
      return;
    }

    isDownloading = true;

    try {
      const html2pdfModule = await import('html2pdf.js');
      const html2pdf = html2pdfModule.default;
      /** @type {any} */
      const pdfOptions = {
        margin: [10, 10, 12, 10],
        filename: downloadFilename,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          backgroundColor: '#ffffff'
        },
        jsPDF: {
          unit: 'mm',
          format: 'a4',
          orientation: 'portrait'
        },
        pagebreak: {
          mode: ['css', 'legacy'],
          avoid: ['.m4-questionnaire-pdf-category', '.m4-questionnaire-pdf-result']
        }
      };

      await html2pdf()
        .set(pdfOptions)
        .from(pdfDocument)
        .save();
    } finally {
      isDownloading = false;
    }
  }
</script>

<section class="m4-questionnaire" aria-labelledby="m4-questionnaire-title">
  <header class="m4-questionnaire-heading">
    <h3 id="m4-questionnaire-title">{title}</h3>
    <p>{introduction}</p>
  </header>

  <label class="m4-questionnaire-model-selector">
    <span>{businessModelLabel}</span>
    <select bind:value={selectedBusinessModel} on:change={handleBusinessModelChange}>
      <option value="" disabled>{businessModelPlaceholder}</option>
      {#each businessModelOptions as businessModel}
        <option value={businessModel}>{businessModel}</option>
      {/each}
      <option value={otherBusinessModelLabel}>{otherBusinessModelLabel}</option>
    </select>
  </label>

  <div class="m4-questionnaire-card">
    {#each categories as category, categoryIndex}
      <section class="m4-questionnaire-category">
        <h4>{category.title}</h4>

        <div class="m4-questionnaire-questions">
          {#each category.questions as question, questionIndex}
            {@const answerIndex =
              categories
                .slice(0, categoryIndex)
                .reduce((total, item) => total + item.questions.length, 0) + questionIndex}
            {@const questionText = typeof question === 'string' ? question : question.text}
            {@const questionYesLabel =
              typeof question === 'string' ? yesLabel : question.yesLabel ?? yesLabel}
            {@const questionNoLabel =
              typeof question === 'string' ? noLabel : question.noLabel ?? noLabel}
            <div
              class="m4-questionnaire-question"
              role="group"
              aria-labelledby={`m4-question-${answerIndex}`}
            >
              <p id={`m4-question-${answerIndex}`}>{questionText}</p>

              <div class="m4-questionnaire-answer-buttons">
                <button
                  type="button"
                  class:active={answers[answerIndex] === true}
                  aria-pressed={answers[answerIndex] === true}
                  disabled={!selectedBusinessModel}
                  on:click={() => selectAnswer(answerIndex, true)}
                >
                  {questionYesLabel}
                </button>
                <button
                  type="button"
                  class:active={answers[answerIndex] === false}
                  aria-pressed={answers[answerIndex] === false}
                  disabled={!selectedBusinessModel}
                  on:click={() => selectAnswer(answerIndex, false)}
                >
                  {questionNoLabel}
                </button>
              </div>
            </div>
          {/each}
        </div>
      </section>
    {/each}
  </div>

  <aside
    class="m4-questionnaire-results"
    class:complete={isComplete}
    class:positive={hasPotential}
    aria-live="polite"
  >
    <div>
      <h4>{resultsTitle}</h4>
      <p>{answeredCount} / {questions.length} {answeredLabel}</p>
    </div>

    {#if isComplete}
      <p class="m4-questionnaire-result-message">
        {hasPotential ? positiveResult : negativeResult}
      </p>
      <p class="m4-questionnaire-score">{yesPercentage}% Yes</p>
    {:else}
      <p class="m4-questionnaire-result-message">
        {selectedBusinessModel ? incompleteText : selectBusinessModelText}
      </p>
    {/if}

    <button
      type="button"
      class="primary-button m4-questionnaire-download"
      disabled={!isComplete || isDownloading}
      on:click={downloadResults}
    >
      {isDownloading ? downloadingLabel : downloadLabel}
    </button>
  </aside>

  <div class="m4-questionnaire-pdf-stage" aria-hidden="true">
    <article class="m4-questionnaire-pdf" bind:this={pdfDocument}>
      <header class="m4-questionnaire-pdf-header">
        <img src="{base}/logos/logo-toolbox.png" alt="" />
        <div>
          <h1>{title}</h1>
          <p>{introduction}</p>
        </div>
      </header>

      <section class="m4-questionnaire-pdf-model">
        <span>{businessModelLabel}</span>
        <strong>{selectedBusinessModel}</strong>
      </section>

      <main>
        {#each categories as category, categoryIndex}
          <section class="m4-questionnaire-pdf-category">
            <h2>{category.title}</h2>

            {#each category.questions as question, questionIndex}
              {@const answerIndex =
                categories
                  .slice(0, categoryIndex)
                  .reduce((total, item) => total + item.questions.length, 0) + questionIndex}
              {@const questionText = typeof question === 'string' ? question : question.text}
              <div class="m4-questionnaire-pdf-answer">
                <p>{questionText}</p>
                <strong><span>{getAnswerLabel(question, answers[answerIndex])}</span></strong>
              </div>
            {/each}
          </section>
        {/each}

        <section class="m4-questionnaire-pdf-result">
          <div>
            <h2>{resultsTitle}</h2>
            <strong>{yesPercentage}% Yes</strong>
          </div>
          <p>{hasPotential ? positiveResult : negativeResult}</p>
        </section>
      </main>

      <footer class="m4-questionnaire-pdf-footer">
        <div class="m4-questionnaire-pdf-logos">
          <img class="m4-questionnaire-pdf-eu-logo" src="{base}/logos/EU-logo.png" alt="" />
          <img src="{base}/logos/EU4Green-logo.png" alt="" />
        </div>
        <p>{pdfDisclaimer}</p>
      </footer>
    </article>
  </div>
</section>

<style>
  .m4-questionnaire {
    display: grid;
    gap: 22px;
    width: min(var(--site-container-max), 92vw);
    margin-top: 42px;
  }

  .m4-questionnaire-heading {
    display: grid;
    gap: 10px;
    max-width: 980px;
  }

  .m4-questionnaire-heading h3 {
    font-size: clamp(1.7rem, 3vw, 2.6rem);
    text-transform: uppercase;
  }

  .m4-questionnaire-heading p {
    color: var(--muted);
  }

  .m4-questionnaire-model-selector {
    display: grid;
    grid-template-columns: minmax(220px, auto) minmax(260px, 520px);
    gap: 18px;
    align-items: center;
    width: fit-content;
    max-width: 100%;
    padding: 18px 20px;
    border-radius: 15px;
    background-color: var(--light-bg);
  }

  .m4-questionnaire-model-selector span {
    color: var(--dark);
    font-weight: 700;
  }

  .m4-questionnaire-model-selector select {
    width: 100%;
    min-height: 48px;
    padding: 10px 42px 10px 14px;
    border: 2px solid var(--dark);
    border-radius: 15px;
    background-color: var(--white);
    color: var(--dark);
    cursor: pointer;
  }

  .m4-questionnaire-model-selector select:focus {
    outline: 3px solid color-mix(in srgb, var(--module-accent) 40%, transparent);
    outline-offset: 2px;
  }

  .m4-questionnaire-card {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 22px;
    padding: 24px;
    border-radius: 15px;
    background-color: var(--light-bg);
  }

  .m4-questionnaire-category {
    position: relative;
    display: grid;
    gap: 16px;
    min-width: 0;
    padding: 22px;
    overflow: hidden;
    border: 1px solid color-mix(in srgb, var(--module-accent) 65%, var(--dark));
    border-radius: 15px;
    background-color: color-mix(in srgb, var(--module-accent) 12%, var(--white));
  }

  .m4-questionnaire-category::before {
    content: "";
    position: absolute;
    inset: 0 auto 0 0;
    width: 8px;
    background-color: var(--module-accent);
  }

  .m4-questionnaire-category h4 {
    color: var(--dark);
    font-family: "Bahnschrift SemiCondensed", "Bahnschrift", Impact, sans-serif;
    font-size: 1.45rem;
  }

  .m4-questionnaire-questions {
    display: grid;
    gap: 14px;
  }

  .m4-questionnaire-question {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 16px;
    align-items: center;
    min-width: 0;
    padding-top: 14px;
    border-top: 1px solid rgba(10, 46, 54, 0.14);
  }

  .m4-questionnaire-question:first-child {
    padding-top: 0;
    border-top: 0;
  }

  .m4-questionnaire-question p {
    color: var(--text);
    line-height: 1.35;
  }

  .m4-questionnaire-answer-buttons {
    display: flex;
    gap: 8px;
  }

  .m4-questionnaire-answer-buttons button {
    min-width: 64px;
    padding: 9px 14px;
    border: 2px solid var(--dark);
    border-radius: 15px;
    background-color: transparent;
    color: var(--dark);
    font: inherit;
    font-weight: 700;
    cursor: pointer;
    transition:
      background-color 0.18s ease,
      color 0.18s ease,
      transform 0.18s ease;
  }

  .m4-questionnaire-answer-buttons button:hover {
    transform: translateY(-1px);
    background-color: color-mix(in srgb, var(--module-accent) 30%, var(--white));
  }

  .m4-questionnaire-answer-buttons button.active {
    background-color: var(--dark);
    color: var(--white);
  }

  .m4-questionnaire-answer-buttons button:disabled {
    border-color: var(--soft-border);
    background-color: transparent;
    color: var(--muted);
    cursor: not-allowed;
    opacity: 0.68;
  }

  .m4-questionnaire-results {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    gap: 18px 30px;
    align-items: center;
    padding: 22px 24px;
    border: 2px solid var(--soft-border);
    border-radius: 15px;
    background-color: var(--light-bg);
  }

  .m4-questionnaire-results > div {
    display: grid;
    gap: 2px;
  }

  .m4-questionnaire-results h4 {
    color: var(--dark);
    font-family: "Bahnschrift SemiCondensed", "Bahnschrift", Impact, sans-serif;
    font-size: 1.45rem;
    text-transform: uppercase;
  }

  .m4-questionnaire-results > div p,
  .m4-questionnaire-score {
    color: var(--muted);
    font-size: 0.92rem;
    font-weight: 700;
  }

  .m4-questionnaire-results.complete {
    border-color: var(--blue);
    background-color: color-mix(in srgb, var(--blue) 8%, var(--white));
  }

  .m4-questionnaire-results.complete.positive {
    border-color: var(--green-secondary);
    background-color: color-mix(in srgb, var(--green-secondary) 10%, var(--white));
  }

  .m4-questionnaire-result-message {
    color: var(--dark);
    line-height: 1.4;
  }

  .m4-questionnaire-score {
    grid-column: 2;
  }

  .m4-questionnaire-download {
    grid-column: 3;
    grid-row: 1 / span 2;
    align-self: center;
    white-space: nowrap;
  }

  .m4-questionnaire-download:disabled {
    border-color: var(--soft-border);
    background-color: var(--soft-border);
    color: var(--muted);
    cursor: not-allowed;
  }

  .m4-questionnaire-pdf-stage {
    position: fixed;
    top: 0;
    left: -100000px;
    width: 718px;
    pointer-events: none;
  }

  .m4-questionnaire-pdf {
    width: 718px;
    padding: 38px;
    background-color: #ffffff;
    color: #1f2a2e;
    font-family: Tahoma, Arial, sans-serif;
    line-height: 1.35;
  }

  .m4-questionnaire-pdf-header {
    display: grid;
    grid-template-columns: 72px minmax(0, 1fr);
    gap: 20px;
    align-items: center;
    padding-bottom: 22px;
    border-bottom: 5px solid var(--module-accent);
  }

  .m4-questionnaire-pdf-header img {
    width: 72px;
    height: auto;
  }

  .m4-questionnaire-pdf h1 {
    margin: 0 0 8px;
    color: #0a2e36;
    font-family: "Bahnschrift SemiCondensed", "Bahnschrift", Impact, sans-serif;
    font-size: 34px;
    line-height: 1;
    text-transform: uppercase;
  }

  .m4-questionnaire-pdf-header p {
    margin: 0;
    color: #637173;
    font-size: 14px;
  }

  .m4-questionnaire-pdf-model {
    display: grid;
    grid-template-columns: 210px minmax(0, 1fr);
    gap: 18px;
    align-items: center;
    margin-top: 18px;
    padding: 12px 16px;
    border-radius: 10px;
    background-color: #f7f7f2;
  }

  .m4-questionnaire-pdf-model span {
    color: #637173;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
  }

  .m4-questionnaire-pdf-model strong {
    color: #0a2e36;
    font-size: 14px;
  }

  .m4-questionnaire-pdf main {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
    margin-top: 20px;
  }

  .m4-questionnaire-pdf-category {
    padding: 16px;
    border-left: 7px solid var(--module-accent);
    border-radius: 10px;
    background-color: color-mix(in srgb, var(--module-accent) 12%, #ffffff);
    break-inside: avoid;
  }

  .m4-questionnaire-pdf-category h2,
  .m4-questionnaire-pdf-result h2 {
    margin: 0 0 12px;
    color: #0a2e36;
    font-size: 18px;
    text-transform: uppercase;
  }

  .m4-questionnaire-pdf-answer {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 12px;
    align-items: start;
    padding: 9px 0;
    border-top: 1px solid #d8ddd8;
  }

  .m4-questionnaire-pdf-answer p {
    margin: 0;
    font-size: 12px;
  }

  .m4-questionnaire-pdf-answer strong {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 54px;
    min-height: 24px;
    padding: 4px 7px;
    border-radius: 8px;
    background-color: #0a2e36;
    color: #ffffff;
    font-size: 11px;
    line-height: 1;
    text-align: center;
  }

  /*
    html2canvas paints the bold font baseline slightly too low even when the
    badge container is centered. Move only the rendered glyphs upward.
  */
  .m4-questionnaire-pdf-answer strong span {
    display: block;
    transform: translateY(-2px);
  }

  .m4-questionnaire-pdf-result {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: 160px minmax(0, 1fr);
    gap: 20px;
    align-items: center;
    padding: 18px;
    border: 2px solid #41a552;
    border-radius: 10px;
    background-color: #f0f8f1;
    break-inside: avoid;
  }

  .m4-questionnaire-pdf-result h2 {
    margin-bottom: 4px;
  }

  .m4-questionnaire-pdf-result p {
    margin: 0;
    font-size: 13px;
  }

  .m4-questionnaire-pdf-footer {
    display: grid;
    grid-template-columns: 330px minmax(0, 1fr);
    gap: 18px;
    align-items: center;
    margin-top: 22px;
    padding-top: 16px;
    border-top: 1px solid #d8ddd8;
    break-inside: avoid;
  }

  .m4-questionnaire-pdf-logos {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .m4-questionnaire-pdf-logos img {
    width: auto;
    height: 52px;
    object-fit: contain;
  }

  .m4-questionnaire-pdf-footer p {
    margin: 0;
    color: #637173;
    font-size: 9px;
    line-height: 1.35;
  }

  @media (max-width: 900px) {
    .m4-questionnaire-card {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 640px) {
    .m4-questionnaire-model-selector {
      grid-template-columns: 1fr;
      width: 100%;
    }

    .m4-questionnaire-card {
      padding: 14px;
    }

    .m4-questionnaire-category {
      padding: 18px;
    }

    .m4-questionnaire-question,
    .m4-questionnaire-results {
      grid-template-columns: 1fr;
    }

    .m4-questionnaire-answer-buttons {
      width: 100%;
    }

    .m4-questionnaire-answer-buttons button {
      flex: 1;
    }

    .m4-questionnaire-score {
      grid-column: 1;
    }

    .m4-questionnaire-download {
      grid-column: 1;
      grid-row: auto;
      width: 100%;
    }
  }
</style>
