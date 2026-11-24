/*
  Ruang Cek Dongeng — website pendamping e-book Canva.
  Pemeriksa ini sengaja tidak memberi vonis "salah" untuk jawaban esai.
  Ia memeriksa kelengkapan jawaban dan mengenali beberapa peristiwa inti;
  keputusan akhir tetap melalui bukti dari audio dan cek mandiri siswa.
*/

const stories = [
  {
    id: 'tampomas',
    title: 'Legenda Gunung Tampomas',
    tag: 'Dongeng 1',
    icon: '⛰️',
    color: '#e5f0da',
    source: 'https://youtu.be/jLrSJhhRMns?si=FBqZL_1nJK7_3O5m',
    instruction: 'Dengarkan audio Legenda Gunung Tampomas di e-book. Untuk tiap bagian, pilih satu hubungan sebab–akibat yang kamu dengar. Kamu boleh memilih peristiwa yang berbeda dari temanmu.',
    prompts: [
      { title: 'Bagian awal', text: 'Pilih masalah atau peristiwa awal yang kamu dengar.', hint: 'Dengar ulang bagian ketika Gunung Gede/Tampomas mengancam rakyat. Apa yang dilakukan Raja Sumedang setelah mengetahui masalah itu?' },
      { title: 'Bagian tengah', text: 'Pilih tindakan atau keputusan penting seorang tokoh.', hint: 'Dengar ulang petunjuk yang diterima Raja Sumedang. Keputusan apa yang diambilnya?' },
      { title: 'Bagian akhir', text: 'Pilih peristiwa yang menunjukkan perubahan atau penyelesaian.', hint: 'Dengar ulang saat keris pusaka dilemparkan. Apa yang terjadi pada gunung sesudahnya?' }
    ],
    pairs: [
      { cause: ['gunung', 'gede', 'tampomas', 'meletus', 'letusan', 'lahar', 'bencana', 'mengamuk'], effect: ['raja', 'sumedang', 'bersemedi', 'mencari', 'solusi', 'menolong', 'rakyat', 'prajurit'] },
      { cause: ['raja', 'sumedang', 'petunjuk', 'gaib', 'mimpi', 'keris', 'pusaka'], effect: ['melempar', 'lempar', 'keris', 'kawah', 'gunung'] },
      { cause: ['melempar', 'lempar', 'keris', 'pusaka', 'kawah'], effect: ['tenang', 'reda', 'berhenti', 'padam', 'lahar', 'gunung'] },
      { cause: ['rakyat', 'bahaya', 'lahar', 'bencana'], effect: ['mengungsi', 'selamat', 'aman'] }
    ]
  },
  {
    id: 'keongmas',
    title: 'Keong Mas',
    tag: 'Dongeng 2',
    icon: '🐚',
    color: '#fff0cb',
    source: 'https://youtu.be/KjizbU1aQ6w?feature=shared',
    instruction: 'Dengarkan audio Keong Mas di e-book. Catat sebab dan akibat dari peristiwa yang kamu pilih dengan menggunakan bahasamu sendiri.',
    prompts: [
      { title: 'Bagian awal', text: 'Pilih masalah atau perbuatan tokoh pada awal cerita.', hint: 'Dengar ulang bagian tentang Dewi Galuh dan Candra Kirana. Perasaan apa yang mendorong tindakan Dewi Galuh?' },
      { title: 'Bagian tengah', text: 'Pilih perubahan penting yang dialami salah satu tokoh.', hint: 'Dengar ulang saat Candra Kirana terkena sihir. Apa yang terjadi sesudahnya?' },
      { title: 'Bagian akhir', text: 'Pilih tindakan baik yang membawa perubahan dalam cerita.', hint: 'Dengar ulang peran nenek yang menemukan Keong Mas atau usaha Inu Kertapati mencari Candra Kirana.' }
    ],
    pairs: [
      { cause: ['dewi', 'galuh', 'iri', 'cemburu', 'dengki', 'candra', 'kirana'], effect: ['nenek', 'sihir', 'kutuk', 'mengutuk', 'keong', 'emas'] },
      { cause: ['sihir', 'kutuk', 'mengutuk', 'nenek', 'keong'], effect: ['candra', 'kirana', 'keong', 'emas', 'pergi', 'terbuang'] },
      { cause: ['nenek', 'baik', 'menemukan', 'merawat', 'keong'], effect: ['candra', 'kirana', 'membantu', 'makanan', 'masak', 'senang'] },
      { cause: ['inu', 'kertapati', 'mencari', 'candra', 'kirana'], effect: ['bertemu', 'menemukan', 'bersama', 'kembali'] }
    ]
  },
  {
    id: 'lutung',
    title: 'Lutung Kasarung',
    tag: 'Dongeng 3',
    icon: '🌿',
    color: '#e3f1e6',
    source: 'https://youtu.be/0uyud9lFlvc?feature=shared',
    instruction: 'Dengarkan audio Lutung Kasarung di e-book. Pilih peristiwa yang kamu ingat lalu jelaskan hubungan sebab dan akibatnya.',
    prompts: [
      { title: 'Bagian awal', text: 'Pilih masalah yang dialami Purbasari.', hint: 'Dengar ulang tindakan Purbararang terhadap Purbasari. Apa akibatnya bagi Purbasari?' },
      { title: 'Bagian tengah', text: 'Pilih bantuan atau tindakan Lutung Kasarung.', hint: 'Dengar ulang saat Lutung Kasarung membantu Purbasari. Perubahan apa yang terjadi setelah bantuan itu?' },
      { title: 'Bagian akhir', text: 'Pilih sikap tokoh yang membawa akhir cerita.', hint: 'Dengar ulang saat Purbasari menjadi pemimpin. Bagaimana sikapnya kepada Purbararang?' }
    ],
    pairs: [
      { cause: ['purbararang', 'iri', 'cemburu', 'dengki', 'sihir', 'bubuk'], effect: ['purbasari', 'bintik', 'hitam', 'dibuang', 'diasingkan', 'hutan'] },
      { cause: ['purbasari', 'hutan', 'lutung', 'kasarung', 'membantu'], effect: ['sembuh', 'cantik', 'menang', 'ujian', 'bahagia'] },
      { cause: ['lutung', 'kasarung', 'doa', 'berdoa', 'kutukan'], effect: ['pangeran', 'guruminda', 'berubah', 'tampan'] },
      { cause: ['purbasari', 'memaafkan', 'baik', 'tulus'], effect: ['ratu', 'memimpin', 'menikah', 'bahagia', 'kerajaan'] }
    ]
  },
  {
    id: 'malin',
    title: 'Malin Kundang',
    tag: 'Dongeng 4',
    icon: '⛵',
    color: '#e0edf7',
    source: 'https://youtu.be/dvfiAdgfkJc?feature=shared',
    instruction: 'Dengarkan audio Malin Kundang di e-book. Gunakan peristiwa yang kamu dengar untuk mengisi sebab dan akibat secara mandiri.',
    prompts: [
      { title: 'Bagian awal', text: 'Pilih alasan atau peristiwa yang membuat Malin Kundang pergi.', hint: 'Dengar ulang keadaan Malin dan ibunya pada awal cerita. Mengapa Malin ingin merantau?' },
      { title: 'Bagian tengah', text: 'Pilih tindakan Malin saat bertemu ibunya kembali.', hint: 'Dengar ulang saat Malin sudah kaya dan pulang. Apa yang ia lakukan kepada ibunya?' },
      { title: 'Bagian akhir', text: 'Pilih peristiwa yang terjadi setelah ibu Malin Kundang bersedih dan berdoa.', hint: 'Dengar ulang bagian akhir. Apa yang terjadi pada Malin Kundang dan kapalnya?' }
    ],
    pairs: [
      { cause: ['miskin', 'kemiskinan', 'susah', 'merantau', 'ingin', 'kaya'], effect: ['malin', 'pergi', 'meninggalkan', 'ibu', 'kampung', 'laut'] },
      { cause: ['malin', 'kaya', 'malu', 'istri', 'pulang'], effect: ['tidak', 'mengakui', 'menolak', 'ibu', 'durhaka'] },
      { cause: ['ibu', 'sedih', 'sakit', 'doa', 'mengutuk', 'kutuk'], effect: ['badai', 'petir', 'batu', 'kapal', 'malin'] },
      { cause: ['malin', 'durhaka', 'ibu', 'menolak'], effect: ['menyesal', 'batu', 'kutukan'] }
    ]
  }
];

const state = { story: null };
const $ = (selector, root = document) => root.querySelector(selector);

function normalize(value) {
  return value.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function words(value) {
  return normalize(value).split(' ').filter(word => word.length > 1);
}

function hasTerm(text, term) {
  const normalized = ` ${normalize(text)} `;
  return normalized.includes(` ${normalize(term)} `);
}

function matchingTerms(text, terms) {
  return terms.filter(term => hasTerm(text, term));
}

function matchedPairs(story, cause, effect) {
  return story.pairs.filter(pair => matchingTerms(cause, pair.cause).length && matchingTerms(effect, pair.effect).length);
}

function escapeHtml(value) {
  return value.replace(/[&<>'"]/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;' }[character]));
}

function createStoryCards() {
  const grid = $('#storyCards');
  stories.forEach(story => {
    const button = document.createElement('button');
    button.className = 'story-card';
    button.type = 'button';
    button.style.setProperty('--card-soft', story.color);
    button.innerHTML = `<span class="story-icon">${story.icon}</span><small>${story.tag}</small><strong>${story.title}</strong><span>Mulai →</span>`;
    button.addEventListener('click', () => openStory(story.id));
    grid.append(button);
  });
}

function renderRounds(story) {
  const container = $('#rounds');
  const template = $('#roundTemplate');
  const saved = getSaved(story.id);
  container.replaceChildren();

  story.prompts.forEach((prompt, index) => {
    const card = template.content.firstElementChild.cloneNode(true);
    card.dataset.index = index;
    $('.round-number', card).textContent = String(index + 1).padStart(2, '0');
    $('.round-header h3', card).textContent = prompt.title;
    $('.round-header p', card).textContent = prompt.text;
    $('.hint-box', card).innerHTML = `<b>Petunjuk:</b> ${escapeHtml(prompt.hint)}`;
    $('.cause-input', card).value = saved[index]?.cause || '';
    $('.effect-input', card).value = saved[index]?.effect || '';
    $('.evidence-input', card).value = saved[index]?.evidence || '';

    if (saved[index]?.reflection) {
      const radio = $(`.reflection-choice[value="${saved[index].reflection}"]`, card);
      if (radio) radio.checked = true;
    }

    $('.hint-button', card).addEventListener('click', () => {
      const hint = $('.hint-box', card);
      hint.hidden = !hint.hidden;
      $('.hint-button', card).textContent = hint.hidden ? 'Butuh petunjuk?' : 'Sembunyikan petunjuk';
    });

    $('.check-button', card).addEventListener('click', () => checkRound(card, story));
    card.querySelectorAll('textarea, input').forEach(input => input.addEventListener('input', () => saveSilently(story.id)));
    container.append(card);
  });
}

function openStory(id) {
  const story = stories.find(item => item.id === id);
  state.story = story;
  $('#storyTag').textContent = story.tag;
  $('#storyTitle').textContent = story.title;
  $('#storyInstruction').textContent = story.instruction;
  renderRounds(story);
  $('#latihan').hidden = false;
  $('#latihan').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function checkRound(card, story) {
  const cause = $('.cause-input', card).value.trim();
  const effect = $('.effect-input', card).value.trim();
  const evidence = $('.evidence-input', card).value.trim();
  const causeWordCount = words(cause).length;
  const effectWordCount = words(effect).length;
  const evidenceWordCount = words(evidence).length;
  const issues = [];
  const positives = [];

  if (causeWordCount < 3) issues.push('Tulis sebabnya lebih jelas: siapa atau apa yang terjadi lebih dulu?');
  else positives.push('Sebabnya sudah berupa peristiwa.');

  if (effectWordCount < 3) issues.push('Tulis akibatnya lebih jelas: apa yang terjadi setelah itu?');
  else positives.push('Akibatnya sudah berupa peristiwa.');

  if (evidenceWordCount < 2) issues.push('Tambahkan bukti dari audio, misalnya nama tokoh, tindakan, atau kata penting yang kamu dengar.');
  else positives.push('Kamu sudah menuliskan bukti dari audio.');

  const pairs = matchedPairs(story, cause, effect);
  const storyTerms = story.pairs.flatMap(pair => [...pair.cause, ...pair.effect]);
  const recognized = [...new Set([...matchingTerms(cause, storyTerms), ...matchingTerms(effect, storyTerms)])];
  const isComplete = issues.length === 0;

  let title;
  let intro;
  if (!cause && !effect && !evidence) {
    title = 'Belum ada jawaban yang diperiksa.';
    intro = 'Isi sebab, akibat, dan bukti audio terlebih dahulu.';
  } else if (isComplete && pairs.length) {
    title = 'Jawabanmu tampak lengkap dan sesuai dengan peristiwa audio.';
    intro = 'Kami menemukan hubungan peristiwa yang dikenal dari dongeng ini. Sekarang baca sekali lagi: apakah akibatmu benar-benar terjadi setelah sebab yang kamu tulis?';
  } else if (isComplete) {
    title = 'Jawabanmu sudah cukup lengkap untuk dicek mandiri.';
    intro = 'Kalimatmu mungkin memakai kata yang berbeda dari contoh kami. Dengarkan ulang bukti yang kamu tulis untuk memastikan hubungan sebab–akibatnya.';
  } else {
    title = 'Jawabanmu perlu sedikit dilengkapi.';
    intro = 'Ini bukan berarti jawabanmu salah. Perbaiki bagian berikut, lalu tekan Periksa lagi.';
  }

  const detail = issues.length
    ? `<ul>${issues.map(issue => `<li>${escapeHtml(issue)}</li>`).join('')}</ul>`
    : `<ul>${positives.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`;
  const recognition = recognized.length
    ? `<p><b>Yang kami kenali dari jawabanmu:</b> ${escapeHtml(recognized.slice(0, 5).join(', '))}.</p>`
    : `<p><b>Catatan:</b> pemeriksa tidak mengenali kata kunci tertentu. Itu <b>bukan</b> berarti salah—cek kembali bukti audionya.</p>`;
  const feedback = $('.feedback-box', card);
  feedback.className = `feedback-box${isComplete ? '' : ' needs-work'}`;
  feedback.innerHTML = `<h4>${title}</h4><p>${intro}</p>${detail}${recognition}<p class="disclaimer">Pemeriksa ini tidak membandingkan kalimatmu dengan satu kunci jawaban. Gunakan bukti audio dan pertanyaan cek mandiri untuk menentukan apakah jawabanmu sudah tepat.</p>`;
  feedback.hidden = false;
  $('.reflection', card).hidden = false;
  saveSilently(story.id);
}

function collectAnswers() {
  return [...document.querySelectorAll('.round-card')].map(card => ({
    cause: $('.cause-input', card).value.trim(),
    effect: $('.effect-input', card).value.trim(),
    evidence: $('.evidence-input', card).value.trim(),
    reflection: $('.reflection-choice:checked', card)?.value || ''
  }));
}

function storageKey(storyId) { return `ruang-cek-dongeng-${storyId}`; }
function getSaved(storyId) {
  try { return JSON.parse(localStorage.getItem(storageKey(storyId))) || []; }
  catch { return []; }
}
function saveSilently(storyId) {
  if (!state.story || state.story.id !== storyId) return;
  localStorage.setItem(storageKey(storyId), JSON.stringify(collectAnswers()));
}
function saveCurrent() {
  if (!state.story) return;
  saveSilently(state.story.id);
  const status = $('#saveState');
  status.textContent = '✓ Jawaban tersimpan di perangkat ini.';
  window.setTimeout(() => { status.textContent = ''; }, 4200);
}

function setupEvents() {
  $('#backButton').addEventListener('click', () => {
    $('#latihan').hidden = true;
    $('#beranda').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  $('#saveAllButton').addEventListener('click', saveCurrent);
  $('#guideButton').addEventListener('click', () => $('#guideDialog').showModal());
  $('#closeGuide').addEventListener('click', () => $('#guideDialog').close());
}

createStoryCards();
setupEvents();
