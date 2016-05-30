###Demo
http://htmlpreview.github.io/?https://github.com/glennfriend/sc/blob/master/sc/show-content/index.html

###Description
- 一開始隱藏的內容, 點擊後顯示
- 讓 tag 一次點擊後才顯示某些訊息
- 讓 tag 二次點擊後可隱藏原本訊息

```html
<p>
    <span class="sc-show-content-main" data-sc-id="1">item-1</span>
    <span class="sc-show-content-sub"  data-sc-id="1">(item-1 content to show)</span>
</p>
<p>
    <span class="sc-show-content-main" data-sc-id="2">item-2</span>
    <span class="sc-show-content-sub"  data-sc-id="2">(item-2 content to show)</span>
</p>
```

```js
<script>
    sc_show_content_init();
</script>
```

