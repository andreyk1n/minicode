function minifyJavaScript(input) {
    return input
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .replace(/\/\/[^\n]*/g, '')       
      .replace(/\s+/g, ' ')             
      .replace(/\s*({|}|;)\s*/g, '$1')  
      .trim();
  }

  function minifyCSS(input) {
    return input
      .replace(/\s+/g, ' ')            
      .replace(/\s*({|}|;|,)\s*/g, '$1')  
      .trim();
  }

  function minifyHTML(input) {
    return input
      .replace(/\s+/g, ' ')            
      .replace(/>\s+</g, '><')          
      .trim();
  }

  function minifyJSON(input) {
    return JSON.stringify(JSON.parse(input)); 
  }

  function minifyXML(input) {
    return input
      .replace(/\s+/g, ' ')           
      .replace(/>\s*</g, '><')         
      .trim();
  }

  function minifySVG(input) {
    return input
      .replace(/\s+/g, ' ')            
      .replace(/>\s*</g, '><')          
      .trim();
  }

  function copyToClipboard() {
    const copyBtn = document.getElementById('copyBtn');
    const output = document.getElementById('output');
    const range = document.createRange();

    range.selectNode(output);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');

    copyBtn.textContent = '📋 Скопійовано!';
    setTimeout(() => {
      copyBtn.textContent = '📋 Копіювати результат';
    }, 1500);
  }

  function clearFields() {
    document.getElementById('input').value = '';
    document.getElementById('output').textContent = '';
    document.getElementById('copyBtn').style.display = 'none';
    document.querySelector('.select__button').textContent = 'Оберіть мову';
    document.querySelector('.select__dropdown').classList.remove('select__dropdown--active');
  }

  function minify() {
    const langButton = document.querySelector('.select__button');
    const lang = langButton.getAttribute('data-selected');
    const input = document.getElementById('input').value.trim();
    let result = '';

    if (!input) {
      document.getElementById('output').textContent = '⚠️ Поле вводу порожнє!';
      document.getElementById('copyBtn').style.display = 'none';
      return;
    }

    switch (lang) {
      case 'javascript':
        result = minifyJavaScript(input);
        break;
      case 'css':
        result = minifyCSS(input);
        break;
      case 'html':
        result = minifyHTML(input);
        break;
      case 'json':
        result = minifyJSON(input);
        break;
      case 'xml':
        result = minifyXML(input);
        break;
      case 'svg':
        result = minifySVG(input);
        break;
      default:
        result = '❌ Спочатку оберіть мову.';
    }

    document.getElementById('output').textContent = result;
    document.getElementById('copyBtn').style.display = 'inline-block';
  }

  