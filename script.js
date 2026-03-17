```javascript
// 获取两个语言区块和切换按钮
const zhDiv = document.getElementById('zh');
const enDiv = document.getElementById('en');
const btnZh = document.getElementById('btn-zh');
const btnEn = document.getElementById('btn-en');

// 点击中文按钮
btnZh.addEventListener('click', () => {
    zhDiv.style.display = 'block';
    enDiv.style.display = 'none';
    btnZh.classList.add('active');
    btnEn.classList.remove('active');
});

// 点击英文按钮
btnEn.addEventListener('click', () => {
    zhDiv.style.display = 'none';
    enDiv.style.display = 'block';
    btnEn.classList.add('active');
    btnZh.classList.remove('active');
});
```
