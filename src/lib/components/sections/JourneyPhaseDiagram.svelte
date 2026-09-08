<script>
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  import { tick } from 'svelte';
  import { getLanguageFromPathname, localizeContent, localizePath, translate } from '$lib/translation-helper.js';
  import { iconParkUrl } from '$lib/utils/assets.js';

  /**
   * @typedef {{
   *   number: string;
   *   panelSide: 'left' | 'right';
   *   edgePhase: boolean;
   *   phaseName: any;
   *   formerLabel: any;
   *   shortDescription: any;
   *   popUpText: any;
   *   icon: string;
   *   iconAlt: any;
   *   href: string;
   * }} JourneyPhaseStep
   */

  /*
    Edit the phase labels, short descriptions and pop-up text for the
    interactive SME journey diagram here. The visual layout is handled below.
  */
  const labels = {
    phase: { en: 'Phase', uk: 'Фаза', ro: 'Faza', hy: 'Փուլ' },
    openDescriptionPrefix: { en: 'Open', uk: 'Відкрити', ro: 'Deschide', hy: 'Բացել' },
    openDescriptionSuffix: { en: 'phase description', uk: 'опис фази', ro: 'descrierea fazei', hy: 'փուլի նկարագրությունը' }
  };

  /** @type {JourneyPhaseStep[]} */
  const phases = [
    {
      number: '1',
      panelSide: 'left',
      edgePhase: true,
      phaseName: { en: 'Learn', uk: 'Навчання', ro: 'Învață', hy: 'Սովորել' },
      formerLabel: { en: 'Start with the basics', uk: 'Почніть з основ', ro: 'Începe cu elementele de bază', hy: 'Սկսեք հիմունքներից' },
      shortDescription: { en: 'Understand basic CE concepts', uk: 'Зрозумійте базові поняття циркулярної економіки', ro: 'Înțelege conceptele de bază ale economiei circulare', hy: 'Հասկացեք շրջանաձեւ տնտեսության հիմնական գաղափարները' },
      popUpText: {
        en: 'If you are new to circular economy and need a shared language and basic overview, then this phase is relevant for you. This phase introduces the core concepts of circular economy and resource efficient cleaner production.',
        uk: 'Якщо ви лише знайомитеся з циркулярною економікою і потребуєте спільної мови та базового огляду, ця фаза для вас. Вона знайомить з основними поняттями циркулярної економіки та ресурсоефективного чистого виробництва.',
        ro: 'Dacă ești la început cu economia circulară și ai nevoie de un limbaj comun și o privire de ansamblu, această fază este relevantă pentru tine. Ea introduce conceptele de bază ale economiei circulare și ale producției mai curate și eficiente în utilizarea resurselor.',
        hy: 'Եթե նոր եք ծանոթանում շրջանաձեւ տնտեսությանը եւ ձեզ պետք է ընդհանուր լեզու ու հիմնական ակնարկ, այս փուլը ձեզ համար է։ Այն ներկայացնում է շրջանաձեւ տնտեսության եւ ռեսուրսաարդյունավետ մաքուր արտադրության հիմնական գաղափարները։'
      },
      icon: '/icons/phase-icons/icon-learn.png',
      iconAlt: { en: 'Learn phase icon', uk: 'Іконка фази Навчання', ro: 'Pictograma fazei Învață', hy: 'Սովորել փուլի պատկերակ' },
      href: '/journey-phases/learn/'
    },
    {
      number: '2',
      panelSide: 'left',
      edgePhase: false,
      phaseName: { en: 'Assess', uk: 'Оцінювання', ro: 'Evaluează', hy: 'Գնահատել' },
      formerLabel: { en: 'Find your starting point', uk: 'Знайдіть свою відправну точку', ro: 'Găsește punctul de plecare', hy: 'Գտեք ձեր մեկնարկային կետը' },
      shortDescription: { en: 'Map and identify potential for improvement', uk: 'Картуйте й визначайте потенціал для покращення', ro: 'Cartografiază și identifică potențialul de îmbunătățire', hy: 'Քարտեզագրեք եւ գտեք բարելավման ներուժը' },
      popUpText: {
        en: 'If you already have some interest in circular economy or resource efficiency but need a clearer picture of your resource flows and hotspots, then this phase is relevant for you. This phase helps you understand where your business stands today and identify gaps, priorities, and areas where improvement is possible.',
        uk: 'Якщо ви вже цікавитеся циркулярною економікою або ресурсоефективністю, але потребуєте чіткішої картини своїх ресурсних потоків і гарячих точок, ця фаза для вас. Вона допомагає зрозуміти поточний стан бізнесу, прогалини, пріоритети та сфери для покращення.',
        ro: 'Dacă ai deja interes pentru economia circulară sau eficiența resurselor, dar ai nevoie de o imagine mai clară asupra fluxurilor de resurse și a punctelor critice, această fază este relevantă pentru tine. Ea te ajută să înțelegi unde se află afacerea ta astăzi și să identifici lacune, priorități și zone de îmbunătățire.',
        hy: 'Եթե արդեն հետաքրքրված եք շրջանաձեւ տնտեսությամբ կամ ռեսուրսաարդյունավետությամբ, բայց ձեզ պետք է ավելի հստակ պատկեր ձեր ռեսուրսային հոսքերի եւ խնդրահարույց կետերի մասին, այս փուլը ձեզ համար է։ Այն օգնում է հասկանալ բիզնեսի ներկա վիճակը, բացերը, առաջնահերթությունները եւ բարելավման հնարավորությունները։'
      },
      icon: '/icons/phase-icons/icon-assess.png',
      iconAlt: { en: 'Assess phase icon', uk: 'Іконка фази Оцінювання', ro: 'Pictograma fazei Evaluează', hy: 'Գնահատել փուլի պատկերակ' },
      href: '/journey-phases/assess/'
    },
    {
      number: '3',
      panelSide: 'left',
      edgePhase: false,
      phaseName: { en: 'Explore', uk: 'Дослідження', ro: 'Explorează', hy: 'Ուսումնասիրել' },
      formerLabel: { en: 'Explore practical options', uk: 'Дослідіть практичні варіанти', ro: 'Explorează opțiuni practice', hy: 'Ուսումնասիրեք գործնական տարբերակներ' },
      shortDescription: { en: 'Brainstorm and integrate circular principles', uk: 'Генеруйте ідеї та інтегруйте циркулярні принципи', ro: 'Generează idei și integrează principii circulare', hy: 'Գեներացրեք գաղափարներ եւ ներառեք շրջանաձեւ սկզբունքներ' },
      popUpText: {
        en: 'If you know your main challenges and want to apply circular strategies, design principles and ideas that could fit your business context, then this phase is relevant for you. This phase helps you move from assessment to possible solutions, generate options, and prepare a stronger basis for deciding what to take forward.',
        uk: 'Якщо ви знаєте свої основні виклики й хочете застосувати циркулярні стратегії, принципи дизайну та ідеї, що відповідають вашому бізнес-контексту, ця фаза для вас. Вона допомагає перейти від оцінювання до можливих рішень, згенерувати варіанти й підготувати міцнішу основу для вибору подальших дій.',
        ro: 'Dacă îți cunoști principalele provocări și vrei să aplici strategii circulare, principii de design și idei potrivite contextului afacerii tale, această fază este relevantă pentru tine. Ea te ajută să treci de la evaluare la soluții posibile, să generezi opțiuni și să pregătești o bază mai solidă pentru decizia de mai departe.',
        hy: 'Եթե գիտեք ձեր հիմնական մարտահրավերները եւ ցանկանում եք կիրառել շրջանաձեւ ռազմավարություններ, դիզայնի սկզբունքներ ու գաղափարներ, որոնք համապատասխանում են ձեր բիզնեսի համատեքստին, այս փուլը ձեզ համար է։ Այն օգնում է գնահատումից անցնել հնարավոր լուծումների, ստեղծել տարբերակներ եւ պատրաստել ավելի ամուր հիմք հետագա որոշումների համար։'
      },
      icon: '/icons/phase-icons/icon-explore.png',
      iconAlt: { en: 'Explore phase icon', uk: 'Іконка фази Дослідження', ro: 'Pictograma fazei Explorează', hy: 'Ուսումնասիրել փուլի պատկերակ' },
      href: '/journey-phases/explore/'
    },
    {
      number: '4',
      panelSide: 'right',
      edgePhase: false,
      phaseName: { en: 'Evaluate', uk: 'Оцінка потенціалу', ro: 'Analizează', hy: 'Վերլուծել' },
      formerLabel: { en: 'Evaluate what can work', uk: 'Оцініть, що може спрацювати', ro: 'Analizează ce poate funcționa', hy: 'Գնահատեք, թե ինչը կարող է աշխատել' },
      shortDescription: { en: 'Review and prioritize Circular Economy options', uk: 'Перегляньте й пріоритезуйте варіанти циркулярної економіки', ro: 'Revizuiește și prioritizează opțiunile de economie circulară', hy: 'Վերանայեք եւ առաջնահերթեցրեք շրջանաձեւ տնտեսության տարբերակները' },
      popUpText: {
        en: 'If you have identified possible circular options, but need to compare their feasibility, risks, barriers, opportunities, and potential benefits, then this phase is relevant for you. This phase helps you test whether your opportunities make sense strategically, technically, operationally, and financially before investing more time and resources.',
        uk: 'Якщо ви визначили можливі циркулярні варіанти, але потрібно порівняти їхню здійсненність, ризики, бар’єри, можливості та потенційні вигоди, ця фаза для вас. Вона допомагає перевірити, чи мають ваші можливості стратегічний, технічний, операційний і фінансовий сенс до того, як вкладати більше часу й ресурсів.',
        ro: 'Dacă ai identificat opțiuni circulare posibile, dar trebuie să le compari fezabilitatea, riscurile, barierele, oportunitățile și beneficiile potențiale, această fază este relevantă pentru tine. Ea te ajută să testezi dacă oportunitățile tale au sens strategic, tehnic, operațional și financiar înainte de a investi mai mult timp și resurse.',
        hy: 'Եթե գտել եք հնարավոր շրջանաձեւ տարբերակներ, բայց պետք է համեմատել դրանց իրագործելիությունը, ռիսկերը, խոչընդոտները, հնարավորությունները եւ հնարավոր օգուտները, այս փուլը ձեզ համար է։ Այն օգնում է ստուգել՝ արդյոք ձեր հնարավորությունները ռազմավարական, տեխնիկական, գործառնական եւ ֆինանսական տեսանկյունից իմաստ ունեն, նախքան ավելի շատ ժամանակ եւ ռեսուրսներ ներդնելը։'
      },
      icon: '/icons/phase-icons/icon-evaluate.png',
      iconAlt: { en: 'Evaluate phase icon', uk: 'Іконка фази Оцінка потенціалу', ro: 'Pictograma fazei Analizează', hy: 'Վերլուծել փուլի պատկերակ' },
      href: '/journey-phases/evaluate/'
    },
    {
      number: '5',
      panelSide: 'right',
      edgePhase: false,
      phaseName: { en: 'Implement', uk: 'Впровадження', ro: 'Implementează', hy: 'Իրականացնել' },
      formerLabel: { en: 'Turn plans into action', uk: 'Перетворіть плани на дії', ro: 'Transformă planurile în acțiuni', hy: 'Վերածեք պլանները գործողությունների' },
      shortDescription: { en: 'Plan and realise your selected ideas', uk: 'Плануйте й реалізуйте вибрані ідеї', ro: 'Planifică și realizează ideile selectate', hy: 'Պլանավորեք եւ իրականացրեք ընտրված գաղափարները' },
      popUpText: {
        en: 'If you have prioritised a circular opportunity and now need to define responsibilities, partners, milestones, and activities, then this phase is relevant for you. This phase helps you turn selected options into concrete actions, test ideas in practice and build momentum through realistic implementation steps.',
        uk: 'Якщо ви пріоритезували циркулярну можливість і тепер маєте визначити відповідальність, партнерів, етапи та дії, ця фаза для вас. Вона допомагає перетворити вибрані варіанти на конкретні дії, випробувати ідеї на практиці та рухатися вперед через реалістичні кроки впровадження.',
        ro: 'Dacă ai prioritizat o oportunitate circulară și trebuie acum să definești responsabilități, parteneri, etape și activități, această fază este relevantă pentru tine. Ea te ajută să transformi opțiunile selectate în acțiuni concrete, să testezi ideile în practică și să creezi impuls prin pași realiști de implementare.',
        hy: 'Եթե առաջնահերթեցրել եք շրջանաձեւ հնարավորություն եւ այժմ պետք է սահմանեք պատասխանատվություններ, գործընկերներ, հանգրվաններ եւ գործողություններ, այս փուլը ձեզ համար է։ Այն օգնում է ընտրված տարբերակները վերածել կոնկրետ գործողությունների, փորձարկել գաղափարները գործնականում եւ առաջ շարժվել իրատեսական իրականացման քայլերով։'
      },
      icon: '/icons/phase-icons/icon-implement.png',
      iconAlt: { en: 'Implement phase icon', uk: 'Іконка фази Впровадження', ro: 'Pictograma fazei Implementează', hy: 'Իրականացնել փուլի պատկերակ' },
      href: '/journey-phases/implement/'
    },
    {
      number: '6',
      panelSide: 'right',
      edgePhase: true,
      phaseName: { en: 'Monitor', uk: 'Моніторинг', ro: 'Monitorizează', hy: 'Մոնիթորինգ' },
      formerLabel: { en: 'Track and keep improving', uk: 'Відстежуйте й покращуйте', ro: 'Urmărește și îmbunătățește continuu', hy: 'Հետեւեք եւ շարունակ բարելավեք' },
      shortDescription: { en: 'Review and track progress', uk: 'Переглядайте й відстежуйте прогрес', ro: 'Revizuiește și urmărește progresul', hy: 'Վերանայեք եւ հետեւեք առաջընթացին' },
      popUpText: {
        en: 'If you have implemented or tested circular actions, and you need simple indicators, data and feedback loops to understand what is working, then this phase is relevant for you. This phase helps you track results, improve over time, and share your experience.',
        uk: 'Якщо ви впровадили або протестували циркулярні дії й потребуєте простих показників, даних і циклів зворотного зв’язку, щоб зрозуміти, що працює, ця фаза для вас. Вона допомагає відстежувати результати, вдосконалюватися з часом і ділитися досвідом.',
        ro: 'Dacă ai implementat sau testat acțiuni circulare și ai nevoie de indicatori simpli, date și bucle de feedback pentru a înțelege ce funcționează, această fază este relevantă pentru tine. Ea te ajută să urmărești rezultatele, să îmbunătățești în timp și să împărtășești experiența.',
        hy: 'Եթե իրականացրել կամ փորձարկել եք շրջանաձեւ գործողություններ եւ ձեզ պետք են պարզ ցուցանիշներ, տվյալներ ու հետադարձ կապի շրջափուլեր՝ հասկանալու համար, թե ինչն է աշխատում, այս փուլը ձեզ համար է։ Այն օգնում է հետեւել արդյունքներին, ժամանակի ընթացքում բարելավել եւ կիսվել փորձով։'
      },
      icon: '/icons/phase-icons/icon-monitor.png',
      iconAlt: { en: 'Monitor phase icon', uk: 'Іконка фази Моніторинг', ro: 'Pictograma fazei Monitorizează', hy: 'Մոնիթորինգ փուլի պատկերակ' },
      href: '/journey-phases/monitor/'
    }
  ];

  let activePhaseNumber = '1';
  let hasSelectedPhase = false;
  /** @type {any[]} */
  let currentPhases = [];
  $: currentLanguage = getLanguageFromPathname($page.url.pathname, base);
  $: currentPhases = localizeContent(phases, currentLanguage);
  $: activePhase = activePhaseNumber
    ? currentPhases.find((phase) => phase.number === activePhaseNumber) ?? null
    : null;

  /**
   * @param {JourneyPhaseStep} phase
   */
  async function selectPhase(phase) {
    activePhaseNumber = phase.number;
    hasSelectedPhase = true;

    if (typeof window !== 'undefined' && window.matchMedia('(max-width: 720px)').matches) {
      await tick();
      document.querySelector('.journey-diagram-pop-up')?.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      });
    }
  }

  /**
   * @param {KeyboardEvent} event
   */
  function closeOnEscape(event) {
    if (event.key === 'Escape') {
      activePhaseNumber = '';
    }
  }

  /**
   * @param {EventTarget | null} target
   */
  function isLinkTarget(target) {
    return target instanceof Element && target.closest('a');
  }

  /**
   * @param {MouseEvent} event
   * @param {JourneyPhaseStep} phase
   */
  function selectPhaseFromText(event, phase) {
    if (isLinkTarget(event.target)) return;
    selectPhase(phase);
  }

  /**
   * @param {KeyboardEvent} event
   * @param {JourneyPhaseStep} phase
   */
  function selectPhaseFromTextKeydown(event, phase) {
    if (isLinkTarget(event.target)) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      selectPhase(phase);
    }
  }
</script>

<svelte:window on:keydown={closeOnEscape} />

<div class="journey-diagram-curve">
  <div class="journey-diagram-visual">
    <div
      class:has-popup={activePhase !== null}
      class="journey-diagram-chart"
      aria-label={translate({ en: 'Interactive SME journey phase diagram' }, currentLanguage)}
    >
      <div class="journey-steps">
        <div class="journey-line" aria-hidden="true"></div>

        {#each currentPhases as phase}
          <article class:active-step={activePhase?.number === phase.number} class="journey-step">
            <button
              type="button"
              class:active={activePhase?.number === phase.number}
              class:pulse={phase.number === '1' && !hasSelectedPhase}
              class="journey-diagram-point"
              aria-label={`${translate(labels.openDescriptionPrefix, currentLanguage)} ${phase.phaseName} ${translate(labels.openDescriptionSuffix, currentLanguage)}`}
              aria-pressed={activePhase?.number === phase.number}
              on:click={() => selectPhase(phase)}
            >
              <img src="{base}{phase.icon}" alt="" aria-hidden="true" />
            </button>

            <div
              class="journey-step-text"
              role="button"
              tabindex="0"
              aria-label={`${translate(labels.openDescriptionPrefix, currentLanguage)} ${phase.phaseName} ${translate(labels.openDescriptionSuffix, currentLanguage)}`}
              on:click={(event) => selectPhaseFromText(event, phase)}
              on:keydown={(event) => selectPhaseFromTextKeydown(event, phase)}
            >
              <p class="journey-step-number">{translate(labels.phase, currentLanguage)} {phase.number}</p>
              <h4>
                <a href="{base}{localizePath(phase.href, currentLanguage)}" on:click|stopPropagation>
                  {phase.phaseName}
                </a>
              </h4>
              <p>{phase.shortDescription}</p>
            </div>
          </article>
        {/each}
      </div>

      {#if activePhase}
        <aside
          class:edge-panel={activePhase.edgePhase}
          class={`journey-diagram-pop-up panel-${activePhase.panelSide}`}
          aria-live="polite"
        >
          <div class="journey-diagram-panel-card">
            <button
              type="button"
              class="journey-diagram-close"
              aria-label={translate({ en: 'Close selected phase description' }, currentLanguage)}
              on:click={() => (activePhaseNumber = '')}
            >
              <span
                style={`--icon-url: url("${iconParkUrl('close-one')}");`}
                aria-hidden="true"
              ></span>
            </button>

            <div class="journey-diagram-panel-content">
              <h4>{activePhase.formerLabel}</h4>
              <p>{activePhase.popUpText}</p>
            </div>

            <div class="journey-diagram-actions">
              <a href="{base}{localizePath(activePhase.href, currentLanguage)}" class="journey-diagram-go-link">
                {translate({ en: 'View phase' }, currentLanguage)}
                <span
                  class="link-arrow"
                  style={`--icon-url: url("${iconParkUrl('arrow-right')}");`}
                  aria-hidden="true"
                ></span>
              </a>
            </div>
          </div>
        </aside>
      {/if}
    </div>
  </div>
</div>

<style>
  .journey-diagram-curve {
    display: grid;
    margin-top: 42px;
  }

  .journey-diagram-visual {
    max-width: 100%;
  }

  .journey-diagram-chart {
    --journey-point-size: 64px;
    --journey-step-inset: 12px;

    position: relative;
    width: 100%;
    color: var(--dark);
    padding: 30px 24px 24px;
    border-radius: 15px;
  }

  .journey-line {
    position: absolute;
    top: calc(var(--journey-point-size) / 2);
    right: calc((100% / 6) - var(--journey-step-inset) - (var(--journey-point-size) / 2));
    left: calc(var(--journey-step-inset) + (var(--journey-point-size) / 2));
    height: 3px;
    border-radius: 999px;
    background-color: rgba(10, 46, 54, 0.78);
  }

  .journey-steps {
    position: relative;
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: 0;
  }

  .journey-step {
    position: relative;
    display: grid;
    grid-template-rows: var(--journey-point-size) auto;
    justify-items: start;
    gap: 38px;
    min-width: 0;
    padding: 0 var(--journey-step-inset);
  }

  .journey-diagram-point {
    position: relative;
    z-index: 2;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--journey-point-size);
    aspect-ratio: 1;
    padding: 0;
    border: 3px solid currentColor;
    border-radius: 50%;
    color: var(--dark);
    cursor: pointer;
    box-shadow: none;
    background-color: var(--white);
    overflow: hidden;
    transition:
      background-color 0.18s ease,
      box-shadow 0.18s ease,
      transform 0.18s ease,
      border-color 0.18s ease;
  }

  .journey-diagram-point.pulse {
    animation: journey-diagram-point-pulse 2.6s ease-in-out infinite;
  }

  .journey-diagram-point img {
    width: 112%;
    height: 112%;
    object-fit: contain;
    pointer-events: none;
  }

  .journey-diagram-point:hover,
  .journey-diagram-point:focus-visible {
    animation: none;
    border-color: var(--button-highlight);
    box-shadow:
      0 0 0 7px color-mix(in srgb, var(--button-highlight) 32%, transparent),
      0 12px 24px rgba(10, 46, 54, 0.18);
    transform: scale(1.06);
  }

  .journey-diagram-point.active {
    animation: none;
    background-color: var(--button-highlight);
    border-color: var(--button-highlight);
    box-shadow:
      0 0 0 9px color-mix(in srgb, var(--button-highlight) 28%, transparent),
      0 12px 24px rgba(10, 46, 54, 0.18);
    transform: scale(1.06);
  }

  .journey-diagram-point.active.pulse {
    animation: journey-diagram-point-pulse 2.6s ease-in-out infinite;
  }

  @keyframes journey-diagram-point-pulse {
    0%,
    100% {
      box-shadow: 0 0 0 0 color-mix(in srgb, var(--button-highlight) 42%, transparent);
    }

    50% {
      box-shadow: 0 0 0 10px color-mix(in srgb, var(--button-highlight) 10%, transparent);
    }
  }

  .journey-step-text {
    display: grid;
    grid-template-rows: 18px 34px auto;
    align-content: start;
    gap: 4px;
    align-self: stretch;
    width: calc(100% + 24px);
    min-height: 172px;
    margin: -18px -12px 0;
    padding: 18px 18px 32px;
    border-radius: 12px 12px 0 0;
    background-color: transparent;
    cursor: pointer;
    outline: none;
    transition:
      background-color 0.18s ease,
      color 0.18s ease;
  }

  .journey-step-text:hover,
  .journey-step-text:focus-visible {
    background-color: rgba(64, 171, 87, 0.08);
  }

  .journey-step.active-step {
    z-index: 2;
  }

  .journey-step.active-step .journey-step-text {
    background-color: rgba(64, 171, 87, 0.16);
  }

  .journey-step-text .journey-step-number {
    margin: 0 0 2px;
    color: rgba(64, 171, 87, 0.52);
    font-family: var(--font-display);
    font-size: clamp(0.72rem, 1vw, 0.9rem);
    font-weight: 800;
    line-height: 0.95;
    letter-spacing: 0;
  }

  .journey-step.active-step .journey-step-number {
    color: var(--green-secondary);
  }

  .journey-step-text h4 {
    margin: 0;
    font-family: var(--font-display);
    font-size: clamp(1.05rem, 1.9vw, 1.4rem);
    line-height: 1;
    align-self: start;
  }

  .journey-step-text h4 a {
    color: var(--blue);
    text-decoration: none;
    transition: color 0.18s ease;
  }

  .journey-step-text h4 a:hover,
  .journey-step-text h4 a:focus-visible {
    color: var(--blue);
    text-decoration: underline;
    text-decoration-thickness: 3px;
    text-underline-offset: 5px;
  }

  .journey-step-text p {
    margin: 0;
    color: var(--dark);
    font-family: Tahoma, Arial, sans-serif;
    font-size: 1rem;
    line-height: 1.3;
    align-self: start;
  }

  .journey-diagram-pop-up {
    position: relative;
    z-index: 1;
    width: min(760px, 100%);
    margin-top: 0;
    padding: 16px;
    border: 0;
    border-radius: 15px;
    background-color: rgba(64, 171, 87, 0.16);
    box-shadow: none;
    scroll-margin-top: 140px;
  }

  .journey-diagram-pop-up.panel-right {
    margin-left: auto;
  }

  .journey-diagram-pop-up.panel-left {
    margin-right: auto;
  }

  .journey-diagram-pop-up.panel-left.edge-panel {
    border-top-left-radius: 0;
  }

  .journey-diagram-pop-up.panel-right.edge-panel {
    border-top-right-radius: 0;
  }

  .journey-diagram-panel-card {
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    align-items: start;
    min-height: 160px;
    padding: 22px 68px 22px 24px;
    border-radius: 10px;
    background-color: var(--white);
  }

  .journey-diagram-pop-up p {
    line-height: 1.45;
  }

  .journey-diagram-pop-up h4 {
    margin-top: 4px;
    color: var(--dark);
    font-size: clamp(1.15rem, 2vw, 1.5rem);
  }

  .journey-diagram-panel-content {
    display: grid;
    gap: 10px;
  }

  .journey-diagram-actions {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .journey-diagram-go-link {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    width: fit-content;
    padding: 0 0 3px;
    border: 0;
    border-bottom: 2px solid currentColor;
    border-radius: 0;
    color: var(--dark);
    font-weight: 700;
    cursor: pointer;
    text-decoration: none;
    transition:
      color 0.18s ease,
      opacity 0.18s ease;
  }

  .link-arrow {
    width: 0.95em;
    aspect-ratio: 1;
    background-color: currentColor;
    -webkit-mask: var(--icon-url) center / contain no-repeat;
    mask: var(--icon-url) center / contain no-repeat;
    transition: transform 0.18s ease;
  }

  .journey-diagram-close {
    position: absolute;
    top: 16px;
    right: 16px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    aspect-ratio: 1;
    padding: 0;
    border: 0;
    border-radius: 50%;
    background-color: var(--white);
    color: var(--dark);
    cursor: pointer;
  }

  .journey-diagram-close span {
    width: 24px;
    aspect-ratio: 1;
    background-color: currentColor;
    -webkit-mask: var(--icon-url) center / contain no-repeat;
    mask: var(--icon-url) center / contain no-repeat;
  }

  .journey-diagram-close:hover,
  .journey-diagram-close:focus-visible {
    background-color: var(--blue);
    color: var(--white);
  }

  .journey-diagram-go-link:hover,
  .journey-diagram-go-link:focus-visible {
    color: var(--green-secondary);
    opacity: 0.85;
  }

  .journey-diagram-go-link:hover .link-arrow,
  .journey-diagram-go-link:focus-visible .link-arrow {
    transform: translateX(3px);
  }

  @media (max-width: 900px) {
    .journey-diagram-chart {
      min-height: 0;
    }

    .journey-diagram-pop-up {
      margin-top: 28px;
      width: 100%;
      border-radius: 15px;
    }

    .journey-diagram-pop-up.panel-right,
    .journey-diagram-pop-up.panel-left {
      margin-right: 0;
      margin-left: 0;
      border-radius: 15px;
    }

    .journey-diagram-pop-up.panel-left.edge-panel,
    .journey-diagram-pop-up.panel-right.edge-panel {
      border-radius: 15px;
    }

    .journey-diagram-panel-card {
      padding-right: 60px;
    }
  }

  @media (max-width: 640px) {
    .journey-diagram-curve {
      margin-top: 28px;
    }

    .journey-diagram-chart {
      --journey-point-size: 56px;

      padding: 20px 16px;
    }

    .journey-line {
      top: calc(var(--journey-point-size) / 2);
      bottom: calc(var(--journey-point-size) / 2);
      left: calc(var(--journey-point-size) / 2);
      width: 3px;
      height: auto;
      right: auto;
    }

    .journey-steps {
      grid-template-columns: 1fr;
      gap: 28px;
    }

    .journey-step {
      grid-template-columns: var(--journey-point-size) minmax(0, 1fr);
      grid-template-rows: auto;
      gap: 16px;
      align-items: center;
      justify-items: start;
      padding: 0;
    }

    .journey-step.active-step .journey-step-text {
      width: 100%;
      min-height: 0;
      margin: 0;
      padding: 0;
      background-color: transparent;
    }

    .journey-diagram-point {
      justify-self: start;
    }

    .journey-step-text {
      grid-template-rows: none;
      width: 100%;
      min-height: 0;
      margin: 0;
      padding: 0;
      border-radius: 0;
      background-color: transparent;
    }

    .journey-step-text h4 {
      font-size: 1.25rem;
    }

    .journey-step-text p {
      font-size: 1rem;
    }

    .journey-diagram-pop-up {
      max-height: min(420px, calc(100vh - 32px));
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      padding: 16px;
      border-radius: 15px;
    }

    .journey-diagram-panel-card {
      border-radius: 10px;
      padding: 16px 52px 16px 16px;
    }
  }
</style>
