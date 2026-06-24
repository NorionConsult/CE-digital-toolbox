<script>
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
  export let positiveResult;
  /** @type {string} */
  export let negativeResult;

  /** @type {(boolean | null)[]} */
  let answers = [];

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
  $: isComplete = questions.length > 0 && answeredCount === questions.length;
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
</script>

<section class="m3-questionnaire" aria-labelledby="m3-questionnaire-title">
  <header class="m3-questionnaire-heading">
    <h3 id="m3-questionnaire-title">{title}</h3>
    <p>{introduction}</p>
  </header>

  <div class="m3-questionnaire-card">
    {#each categories as category, categoryIndex}
      <section class="m3-questionnaire-category">
        <h4>{category.title}</h4>

        <div class="m3-questionnaire-questions">
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
              class="m3-questionnaire-question"
              role="group"
              aria-labelledby={`m3-question-${answerIndex}`}
            >
              <p id={`m3-question-${answerIndex}`}>{questionText}</p>

              <div class="m3-questionnaire-answer-buttons">
                <button
                  type="button"
                  class:active={answers[answerIndex] === true}
                  aria-pressed={answers[answerIndex] === true}
                  on:click={() => selectAnswer(answerIndex, true)}
                >
                  {questionYesLabel}
                </button>
                <button
                  type="button"
                  class:active={answers[answerIndex] === false}
                  aria-pressed={answers[answerIndex] === false}
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
    class="m3-questionnaire-results"
    class:complete={isComplete}
    class:positive={hasPotential}
    aria-live="polite"
  >
    <div>
      <h4>{resultsTitle}</h4>
      <p>{answeredCount} / {questions.length} {answeredLabel}</p>
    </div>

    {#if isComplete}
      <p class="m3-questionnaire-result-message">
        {hasPotential ? positiveResult : negativeResult}
      </p>
      <p class="m3-questionnaire-score">{yesPercentage}% Yes</p>
    {:else}
      <p class="m3-questionnaire-result-message">{incompleteText}</p>
    {/if}
  </aside>
</section>

<style>
  .m3-questionnaire {
    display: grid;
    gap: 22px;
    width: min(var(--site-container-max), 92vw);
    margin-top: 42px;
  }

  .m3-questionnaire-heading {
    display: grid;
    gap: 10px;
    max-width: 980px;
  }

  .m3-questionnaire-heading h3 {
    font-size: clamp(1.7rem, 3vw, 2.6rem);
    text-transform: uppercase;
  }

  .m3-questionnaire-heading p {
    color: var(--muted);
  }

  .m3-questionnaire-card {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 22px;
    padding: 24px;
    border-radius: 15px;
    background-color: var(--light-bg);
  }

  .m3-questionnaire-category {
    position: relative;
    display: grid;
    gap: 16px;
    min-width: 0;
    padding: 22px;
    overflow: hidden;
    border: 1px solid color-mix(in srgb, var(--yellow) 65%, var(--dark));
    border-radius: 15px;
    background-color: color-mix(in srgb, var(--yellow) 12%, var(--white));
  }

  .m3-questionnaire-category::before {
    content: "";
    position: absolute;
    inset: 0 auto 0 0;
    width: 8px;
    background-color: var(--yellow);
  }

  .m3-questionnaire-category h4 {
    color: var(--dark);
    font-family: "Bahnschrift SemiCondensed", "Bahnschrift", Impact, sans-serif;
    font-size: 1.45rem;
  }

  .m3-questionnaire-questions {
    display: grid;
    gap: 14px;
  }

  .m3-questionnaire-question {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 16px;
    align-items: center;
    min-width: 0;
    padding-top: 14px;
    border-top: 1px solid rgba(10, 46, 54, 0.14);
  }

  .m3-questionnaire-question:first-child {
    padding-top: 0;
    border-top: 0;
  }

  .m3-questionnaire-question p {
    color: var(--text);
    line-height: 1.35;
  }

  .m3-questionnaire-answer-buttons {
    display: flex;
    gap: 8px;
  }

  .m3-questionnaire-answer-buttons button {
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

  .m3-questionnaire-answer-buttons button:hover {
    transform: translateY(-1px);
    background-color: color-mix(in srgb, var(--module-accent) 30%, var(--white));
  }

  .m3-questionnaire-answer-buttons button.active {
    background-color: var(--dark);
    color: var(--white);
  }

  .m3-questionnaire-results {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    gap: 18px 30px;
    align-items: center;
    padding: 22px 24px;
    border: 2px solid var(--soft-border);
    border-radius: 15px;
    background-color: var(--light-bg);
  }

  .m3-questionnaire-results > div {
    display: grid;
    gap: 2px;
  }

  .m3-questionnaire-results h4 {
    color: var(--dark);
    font-family: "Bahnschrift SemiCondensed", "Bahnschrift", Impact, sans-serif;
    font-size: 1.45rem;
    text-transform: uppercase;
  }

  .m3-questionnaire-results > div p,
  .m3-questionnaire-score {
    color: var(--muted);
    font-size: 0.92rem;
    font-weight: 700;
  }

  .m3-questionnaire-results.complete {
    border-color: var(--blue);
    background-color: color-mix(in srgb, var(--blue) 8%, var(--white));
  }

  .m3-questionnaire-results.complete.positive {
    border-color: var(--green-secondary);
    background-color: color-mix(in srgb, var(--green-secondary) 10%, var(--white));
  }

  .m3-questionnaire-result-message {
    color: var(--dark);
    line-height: 1.4;
  }

  .m3-questionnaire-score {
    grid-column: 2;
  }

  @media (max-width: 900px) {
    .m3-questionnaire-card {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 640px) {
    .m3-questionnaire-card {
      padding: 14px;
    }

    .m3-questionnaire-category {
      padding: 18px;
    }

    .m3-questionnaire-question,
    .m3-questionnaire-results {
      grid-template-columns: 1fr;
    }

    .m3-questionnaire-answer-buttons {
      width: 100%;
    }

    .m3-questionnaire-answer-buttons button {
      flex: 1;
    }

    .m3-questionnaire-score {
      grid-column: 1;
    }
  }
</style>
