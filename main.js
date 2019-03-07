const form = document.forms[0]
const nameFild = document.querySelector('#Name')
const linkFild = document.querySelector('#PhotoLink')
const emailFild = document.querySelector('#Email')
const phoneFild = document.querySelector('#PhoneNumber')
const introFild = document.querySelector('#Introduce')
const themeFild = document.querySelector('.custom-select')


// Submit後清空輸入框
function passRemove() {
  const feedbackDiv = document.querySelector('.feedback')

  nameFild.value = ""
  nameFild.classList.remove('is-valid', 'is-invalid')
  nameFild.setAttribute('placeholder', 'Name')
  linkFild.value = ""
  emailFild.value = ""
  emailFild.classList.remove('is-valid', 'is-invalid')
  emailFild.setAttribute('placeholder', 'Email')
  phoneFild.value = ""
  phoneFild.classList.remove('is-valid', 'is-invalid')
  phoneFild.setAttribute('placeholder', 'Phone')
  introFild.value = ""
  introFild.classList.remove('is-valid', 'is-invalid')
  introFild.setAttribute('placeholder', 'Introduce youself！')
  themeFild.value = '0'
  themeFild.style.border = '0'
  feedbackDiv.innerHTML = ""
}

// Submit功能
form.addEventListener('submit', function (event) {
  event.preventDefault()
  const t1Cover = document.querySelector('.type_1 .cover')
  const t2Cover = document.querySelector('.type_2 .cover')

  // 判斷是否有輸入成功
  if (nameFild.classList.contains('is-valid') && emailFild.classList.contains('is-valid') && phoneFild.classList.contains('is-valid') && introFild.value.length > 0 && themeFild.value > 0) {
    if (linkFild.value <= 0) {
      linkFild.setAttribute('placeholder', 'Default')
    }
    // 判斷該打開哪個遮罩
    if (themeFild.value === '1') {
      t1Cover.setAttribute('class', 'coverOpen')
      t2Cover.setAttribute('class', 'cover')
    } else if (themeFild.value === '2') {
      t2Cover.setAttribute('class', 'coverOpen')
      t1Cover.setAttribute('class', 'cover')
    }
    console.log('All pass.')
    passRemove()
  } else {
    // 判斷是哪個沒有輸入
    if (nameFild.value.length === 0) nameFild.classList.add('is-invalid'), nameFild.setAttribute('placeholder', 'Name please！')
    if (emailFild.value.length === 0) emailFild.classList.add('is-invalid'), emailFild.setAttribute('placeholder', 'Email please！')
    if (phoneFild.value.length === 0) phoneFild.classList.add('is-invalid'), phoneFild.setAttribute('placeholder', 'Phone please！')
    if (introFild.value.length === 0) introFild.classList.add('is-invalid'), introFild.setAttribute('placeholder', 'Please Introduce！')
    if (themeFild.value === '0') themeFild.style.border = '1px solid red'
    console.log('No pass.')
  }
})

// input檢查功能
form.addEventListener('input', function (event) {
  const inputFild = event.target
  const input = inputFild.value
  if (inputFild.id === 'Name') {
    // 輸入正確或是失敗更改輸入框樣式
    if (input.length >= 2) {
      inputFild.classList.replace('is-invalid', 'is-valid')
    } else {
      inputFild.classList.add('is-invalid')
    }
  } else if (inputFild.id === 'Email') {
    //判斷Email是否有照格式輸入
    if (input.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1) {
      inputFild.classList.replace('is-invalid', 'is-valid')
    } else {
      inputFild.classList.add('is-invalid')
    }
  } else if (inputFild.id === 'PhoneNumber') {
    // 判斷輸入是否為數字以及是否為10個數字
    if (!isNaN(input) && input.length === 10) {
      inputFild.classList.replace('is-invalid', 'is-valid')
    } else {
      inputFild.classList.add('is-invalid')
    }
  } else if (inputFild.id === 'Introduce') {
    const feedbackDiv = inputFild.nextElementSibling
    let count = input.length
    if (count <= 200) {
      introFild.classList.replace('is-invalid', 'is-valid')
      feedbackDiv.innerHTML = `剩下${200 - count}字可以輸入`
      feedbackDiv.classList.add('text-success')
    } else {
      introFild.classList.add('is-invalid')
      feedbackDiv.innerHTML = '超過囉！請減少字數！'
      feedbackDiv.classList.replace('text-success', 'text-danger')
    }
  }
})

// input製作名片功能
const t1NamecardTitle = document.querySelector('.type_1 .namecardTitle')
const t2NamecardTitle = document.querySelector('.type_2 .namecardTitle')
const t1MyPhoto = document.querySelector('.type_1 .photo')
const t2MyPhoto = document.querySelector('.type_2 .photo')
const t1Email = document.querySelector('.type_1 .namecardEmail')
const t2Email = document.querySelector('.type_2 .namecardEmail')
const t1Phone = document.querySelector('.type_1 .namecardPhone')
const t2Phone = document.querySelector('.type_2 .namecardPhone')
const t1Intro = document.querySelector('.type_1 .namecardIntro')
const t2Intro = document.querySelector('.type_2 .namecardIntro')

form.addEventListener('input', function (event) {
  const inputFild = event.target
  const input = inputFild.value

  if (inputFild.id === 'Name') {
    t1NamecardTitle.innerHTML = input
    t2NamecardTitle.innerHTML = input
  } else if (inputFild.id === 'PhotoLink') {
    t1MyPhoto.src = input
    t2MyPhoto.src = input
  } else if (inputFild.id === 'Email') {
    t1Email.innerHTML = input
    t2Email.innerHTML = input
  } else if (inputFild.id === 'PhoneNumber') {
    t1Phone.innerHTML = input
    t2Phone.innerHTML = input
  } else if (inputFild.id === 'Introduce') {
    t1Intro.innerHTML = input
    t2Intro.innerHTML = input
  }
})