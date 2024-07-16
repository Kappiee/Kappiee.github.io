<template>
    <div><h1 id="_3-3-扩展-正则中的粘连标记" tabindex="-1"><a class="header-anchor"
                                                              href="#_3-3-扩展-正则中的粘连标记"><span>3-3. [扩展]正则中的粘连标记</span></a>
    </h1>
        <p>标记名：y</p>
        <p>含义：匹配时，完全按照正则对象中的lastIndex位置开始匹配，并且匹配的位置必须在lastIndex位置。</p>
        <div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre
            v-pre class="language-javascript"><code><span class="line"><span
            class="token keyword">const</span> text <span class="token operator">=</span> <span class="token string">"Hello World!!!"</span><span
            class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> reg <span class="token operator">=</span> <span
    class="token regex"><span class="token regex-delimiter">/</span><span
    class="token regex-source language-regex">W\w+</span><span class="token regex-delimiter">/</span><span
    class="token regex-flags">y</span></span><span class="token punctuation">;</span> <span class="token comment">//匹配W或w字母开头后面的字符串</span></span>
<span class="line">reg<span class="token punctuation">.</span>lastIndex <span class="token operator">=</span> <span
    class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// 改为从第三个字符开始匹配W/w 类似与 /^W\w+/</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span
    class="token punctuation">(</span><span class="token string">"reg.lastIndex:"</span><span class="token punctuation">,</span> reg<span
    class="token punctuation">.</span>lastIndex<span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span
    class="token punctuation">(</span>reg<span class="token punctuation">.</span><span
    class="token function">test</span><span class="token punctuation">(</span>text<span
    class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
            <div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0">
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


