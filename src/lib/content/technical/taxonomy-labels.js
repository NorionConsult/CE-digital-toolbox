import { translate } from '$lib/translation-helper.js';

/*
  Stable translations for taxonomy/filter labels.
  Editors normally do not need to edit this file: the English taxonomy values in
  the content files remain the stable values used for filtering and matching.
  These translations only change how those values are displayed to visitors.
*/

/** @type {Record<string, Record<string, Record<string, string>>>} */
const taxonomyLabels = {
  journeyPhases: {
    Learn: {
      en: 'Learn',
      uk: 'Навчання',
      ro: 'Învățare',
      hy: 'Սովորել'
    },
    Assess: {
      en: 'Assess',
      uk: 'Оцінювання',
      ro: 'Evaluare',
      hy: 'Գնահատել'
    },
    Explore: {
      en: 'Explore',
      uk: 'Дослідження',
      ro: 'Explorare',
      hy: 'Ուսումնասիրել'
    },
    Evaluate: {
      en: 'Evaluate',
      uk: 'Аналіз',
      ro: 'Analiză',
      hy: 'Վերլուծել'
    },
    Implement: {
      en: 'Implement',
      uk: 'Впровадження',
      ro: 'Implementare',
      hy: 'Իրականացնել'
    },
    Monitor: {
      en: 'Monitor',
      uk: 'Моніторинг',
      ro: 'Monitorizare',
      hy: 'Մշտադիտարկել'
    },
    None: {
      en: 'None',
      uk: 'Немає',
      ro: 'Niciuna',
      hy: 'Չկա'
    }
  },
  sectors: {
    'Agriculture and Food': {
      en: 'Agriculture and Food',
      uk: 'Сільське господарство та продовольство',
      ro: 'Agricultură și alimentație',
      hy: 'Գյուղատնտեսություն և սնունդ'
    },
    Automotive: {
      en: 'Automotive',
      uk: 'Автомобільна галузь',
      ro: 'Automotive',
      hy: 'Ավտոմոբիլային ոլորտ'
    },
    Construction: {
      en: 'Construction',
      uk: 'Будівництво',
      ro: 'Construcții',
      hy: 'Շինարարություն'
    },
    Cosmetics: {
      en: 'Cosmetics',
      uk: 'Косметика',
      ro: 'Cosmetice',
      hy: 'Կոսմետիկա'
    },
    'Cross-sector': {
      en: 'Cross-sector',
      uk: 'Міжсекторний',
      ro: 'Transsectorial',
      hy: 'Միջոլորտային'
    },
    'Electronics and ICT': {
      en: 'Electronics and ICT',
      uk: 'Електроніка та ІКТ',
      ro: 'Electronică și TIC',
      hy: 'Էլեկտրոնիկա և ՏՀՏ'
    },
    'Food and Agriculture': {
      en: 'Food and Agriculture',
      uk: 'Продовольство та сільське господарство',
      ro: 'Alimentație și agricultură',
      hy: 'Սնունդ և գյուղատնտեսություն'
    },
    Furniture: {
      en: 'Furniture',
      uk: 'Меблі',
      ro: 'Mobilier',
      hy: 'Կահույք'
    },
    Manufacturing: {
      en: 'Manufacturing',
      uk: 'Виробництво',
      ro: 'Producție',
      hy: 'Արտադրություն'
    },
    'Mining and Minerals': {
      en: 'Mining and Minerals',
      uk: 'Гірничодобувна галузь і мінерали',
      ro: 'Minerit și minerale',
      hy: 'Հանքարդյունաբերություն և հանքանյութեր'
    },
    Packaging: {
      en: 'Packaging',
      uk: 'Пакування',
      ro: 'Ambalaje',
      hy: 'Փաթեթավորում'
    },
    Plastics: {
      en: 'Plastics',
      uk: 'Пластмаси',
      ro: 'Materiale plastice',
      hy: 'Պլաստմասսա'
    },
    Recycling: {
      en: 'Recycling',
      uk: 'Перероблення',
      ro: 'Reciclare',
      hy: 'Վերամշակում'
    },
    Retail: {
      en: 'Retail',
      uk: 'Роздрібна торгівля',
      ro: 'Comerț cu amănuntul',
      hy: 'Մանրածախ առևտուր'
    },
    Services: {
      en: 'Services',
      uk: 'Послуги',
      ro: 'Servicii',
      hy: 'Ծառայություններ'
    },
    Textiles: {
      en: 'Textiles',
      uk: 'Текстиль',
      ro: 'Textile',
      hy: 'Տեքստիլ'
    },
    Tourism: {
      en: 'Tourism',
      uk: 'Туризм',
      ro: 'Turism',
      hy: 'Զբոսաշրջություն'
    },
    'Waste Management': {
      en: 'Waste Management',
      uk: 'Управління відходами',
      ro: 'Gestionarea deșeurilor',
      hy: 'Թափոնների կառավարում'
    }
  },
  countries: {
    Armenia: {
      en: 'Armenia',
      uk: 'Вірменія',
      ro: 'Armenia',
      hy: 'Հայաստան'
    },
    'Republic of Moldova': {
      en: 'Republic of Moldova',
      uk: 'Республіка Молдова',
      ro: 'Republica Moldova',
      hy: 'Մոլդովայի Հանրապետություն'
    },
    Ukraine: {
      en: 'Ukraine',
      uk: 'Україна',
      ro: 'Ucraina',
      hy: 'Ուկրաինա'
    }
  },
  rStrategies: {
    'Recycle (R8)': {
      en: 'Recycle (R8)',
      uk: 'Перероблення (R8)',
      ro: 'Reciclare (R8)',
      hy: 'Վերամշակում (R8)'
    },
    'Reduce (R2)': {
      en: 'Reduce (R2)',
      uk: 'Скорочення (R2)',
      ro: 'Reducere (R2)',
      hy: 'Կրճատում (R2)'
    },
    'Refurbish (R5)': {
      en: 'Refurbish (R5)',
      uk: 'Відновлення (R5)',
      ro: 'Recondiționare (R5)',
      hy: 'Վերանորոգում (R5)'
    },
    'Repair (R4)': {
      en: 'Repair (R4)',
      uk: 'Ремонт (R4)',
      ro: 'Reparare (R4)',
      hy: 'Նորոգում (R4)'
    },
    'Repurpose (R6)': {
      en: 'Repurpose (R6)',
      uk: 'Переорієнтація використання (R6)',
      ro: 'Reutilizare pentru alt scop (R6)',
      hy: 'Նոր նպատակով օգտագործում (R6)'
    },
    'Rethink (R1)': {
      en: 'Rethink (R1)',
      uk: 'Переосмислення (R1)',
      ro: 'Regândire (R1)',
      hy: 'Վերաիմաստավորում (R1)'
    },
    'Reuse (R3)': {
      en: 'Reuse (R3)',
      uk: 'Повторне використання (R3)',
      ro: 'Reutilizare (R3)',
      hy: 'Կրկնակի օգտագործում (R3)'
    }
  },
  languages: {
    Arabic: {
      en: 'Arabic',
      uk: 'Арабська',
      ro: 'Arabă',
      hy: 'Արաբերեն'
    },
    Armenian: {
      en: 'Armenian',
      uk: 'Вірменська',
      ro: 'Armeană',
      hy: 'Հայերեն'
    },
    Chinese: {
      en: 'Chinese',
      uk: 'Китайська',
      ro: 'Chineză',
      hy: 'Չինարեն'
    },
    Dutch: {
      en: 'Dutch',
      uk: 'Нідерландська',
      ro: 'Neerlandeză',
      hy: 'Նիդեռլանդերեն'
    },
    English: {
      en: 'English',
      uk: 'Англійська',
      ro: 'Engleză',
      hy: 'Անգլերեն'
    },
    French: {
      en: 'French',
      uk: 'Французька',
      ro: 'Franceză',
      hy: 'Ֆրանսերեն'
    },
    Georgian: {
      en: 'Georgian',
      uk: 'Грузинська',
      ro: 'Georgiană',
      hy: 'Վրացերեն'
    },
    Multiple: {
      en: 'Multiple',
      uk: 'Кілька мов',
      ro: 'Mai multe limbi',
      hy: 'Մի քանի լեզու'
    },
    Portuguese: {
      en: 'Portuguese',
      uk: 'Португальська',
      ro: 'Portugheză',
      hy: 'Պորտուգալերեն'
    },
    Romanian: {
      en: 'Romanian',
      uk: 'Румунська',
      ro: 'Română',
      hy: 'Ռումիներեն'
    },
    Russian: {
      en: 'Russian',
      uk: 'Російська',
      ro: 'Rusă',
      hy: 'Ռուսերեն'
    },
    Spanish: {
      en: 'Spanish',
      uk: 'Іспанська',
      ro: 'Spaniolă',
      hy: 'Իսպաներեն'
    },
    Ukrainian: {
      en: 'Ukrainian',
      uk: 'Українська',
      ro: 'Ucraineană',
      hy: 'Ուկրաիներեն'
    }
  },
  access: {
    Free: {
      en: 'Free',
      uk: 'Безкоштовно',
      ro: 'Gratuit',
      hy: 'Անվճար'
    },
    Paid: {
      en: 'Paid',
      uk: 'Платно',
      ro: 'Cu plată',
      hy: 'Վճարովի'
    },
    'Sign up': {
      en: 'Sign up',
      uk: 'Реєстрація',
      ro: 'Înregistrare',
      hy: 'Գրանցում'
    }
  },
  effort: {
    Low: {
      en: 'Low',
      uk: 'Низькі',
      ro: 'Redus',
      hy: 'Ցածր'
    },
    Medium: {
      en: 'Medium',
      uk: 'Середні',
      ro: 'Mediu',
      hy: 'Միջին'
    },
    High: {
      en: 'High',
      uk: 'Високі',
      ro: 'Ridicat',
      hy: 'Բարձր'
    }
  }
};

/**
 * @param {string | undefined | null} value
 * @param {string} type
 * @param {string | undefined | null} language
 */
export function translateTaxonomyValue(value, type, language) {
  const label = String(value ?? '');
  return translate(taxonomyLabels[type]?.[label] ?? label, language);
}

/**
 * @param {string[] | undefined | null} values
 * @param {string} type
 * @param {string | undefined | null} language
 */
export function translateTaxonomyList(values, type, language) {
  return (values ?? []).map((value) => translateTaxonomyValue(value, type, language));
}

/**
 * @param {string | undefined | null} value
 * @param {string} type
 * @param {string | undefined | null} language
 */
export function translateTaxonomyDisplay(value, type, language) {
  return String(value ?? '')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean)
    .map((item) => translateTaxonomyValue(item, type, language))
    .join(', ');
}
