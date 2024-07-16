<template>
    <div><h1 id="更多的字符串api" tabindex="-1"><a class="header-anchor"
                                                   href="#更多的字符串api"><span>更多的字符串API</span></a></h1>
        <p>以下均为字符串的实例（原型）方法</p>
        <ul>
            <li>includes</li>
        </ul>
        <p>判断字符串中是否包含指定的子字符串</p>
        <ul>
            <li>startsWith</li>
        </ul>
        <p>判断字符串中是否以指定的字符串开始</p>
        <ul>
            <li>endsWith</li>
        </ul>
        <p>判断字符串中是否以指定的字符串结尾</p>
        <ul>
            <li>repeat</li>
        </ul>
        <p>将字符串重复指定的次数，然后返回一个新字符串。</p>
        <div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre
            v-pre class="language-javascript"><code><span class="line"><span
            class="token keyword">const</span> text <span class="token operator">=</span> <span class="token string">"成哥是狠人"</span><span
            class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span
    class="token punctuation">(</span><span class="token string">"是否包含“狠”："</span><span
    class="token punctuation">,</span> text<span class="token punctuation">.</span><span
    class="token function">includes</span><span class="token punctuation">(</span><span class="token string">"狠"</span><span
    class="token punctuation">)</span><span class="token punctuation">)</span><span
    class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span
    class="token punctuation">(</span><span class="token string">"是否以“成哥”开头："</span><span
    class="token punctuation">,</span> text<span class="token punctuation">.</span><span class="token function">startsWith</span><span
    class="token punctuation">(</span><span class="token string">"成哥"</span><span
    class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">3</span><span
    class="token punctuation">)</span><span class="token punctuation">;</span><span
    class="token comment">//下标为3的位置开始找</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span
    class="token punctuation">(</span><span class="token string">"是否以“狠人”结尾："</span><span
    class="token punctuation">,</span> text<span class="token punctuation">.</span><span
    class="token function">endsWith</span><span class="token punctuation">(</span><span
    class="token string">"狠人"</span><span class="token punctuation">)</span><span
    class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span
    class="token punctuation">(</span><span class="token string">"重复4次："</span><span
    class="token punctuation">,</span> text<span class="token punctuation">.</span><span
    class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">4</span><span
    class="token punctuation">)</span><span class="token punctuation">)</span><span
    class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
            <div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0">
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
            </div>
        </div>
    </div>
</template>


