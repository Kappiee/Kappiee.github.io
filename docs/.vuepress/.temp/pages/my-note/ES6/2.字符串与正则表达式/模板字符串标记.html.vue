<template>
    <div><h1 id="模板字符串标记" tabindex="-1"><a class="header-anchor"
                                                  href="#模板字符串标记"><span>模板字符串标记</span></a></h1>
        <p>在模板字符串书写之前，可以加上标记:</p>
        <div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre
            v-pre class="language-javascript"><code><span class="line">标记名<span class="token template-string"><span
            class="token template-punctuation string">`</span><span class="token string">模板字符串</span><span
            class="token template-punctuation string">`</span></span></span>
<span class="line"></span></code></pre>
            <div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0">
                <div class="line-number"></div>
            </div>
        </div>
        <p>标记是一个函数，函数参数如下：</p>
        <p>示例1:</p>
        <div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre
            v-pre class="language-javascript"><code><span class="line"><span class="token number">1.</span> 参数<span
            class="token number">1</span>：被插值分割的字符串数组</span>
<span class="line"><span class="token number">2.</span> 后续参数：所有的插值</span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> love1 <span class="token operator">=</span> <span
    class="token string">"秋葵"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> love2 <span class="token operator">=</span> <span
    class="token string">"香菜"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> text <span class="token operator">=</span> myTag<span
    class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">邓哥喜欢</span><span
    class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>love1<span
    class="token interpolation-punctuation punctuation">}</span></span><span
    class="token string">，邓哥也喜欢</span><span class="token interpolation"><span
    class="token interpolation-punctuation punctuation">${</span>love2<span
    class="token interpolation-punctuation punctuation">}</span></span><span class="token string">。</span><span
    class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//相当于： </span></span>
<span class="line"><span class="token comment">// text = myTag(["邓哥喜欢", "，邓哥也喜欢", "。"], "秋葵", "香菜")</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">myTag</span><span
    class="token punctuation">(</span><span class="token parameter">parts</span><span class="token punctuation">)</span> <span
    class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> values <span class="token operator">=</span> <span
    class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span
    class="token punctuation">.</span><span class="token function">slice</span><span
    class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>arguments<span
    class="token punctuation">)</span><span class="token punctuation">.</span><span
    class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span
    class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> str <span class="token operator">=</span> <span
    class="token string">""</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span
    class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span
    class="token punctuation">;</span> i <span class="token operator">&lt;</span> values<span class="token punctuation">.</span>length<span
    class="token punctuation">;</span> i<span class="token operator">++</span><span
    class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        str <span class="token operator">+=</span> <span class="token template-string"><span
    class="token template-punctuation string">`</span><span class="token interpolation"><span
    class="token interpolation-punctuation punctuation">${</span>parts<span class="token punctuation">[</span>i<span
    class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span
    class="token string">：</span><span class="token interpolation"><span
    class="token interpolation-punctuation punctuation">${</span>values<span class="token punctuation">[</span>i<span
    class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span
    class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span
    class="token operator">===</span> values<span class="token punctuation">.</span>length <span class="token operator">-</span> <span
    class="token number">1</span><span class="token punctuation">)</span> <span
    class="token punctuation">{</span></span>
<span class="line">            str <span class="token operator">+=</span> parts<span class="token punctuation">[</span>i <span
    class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span
    class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> str<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span
    class="token punctuation">(</span>text<span class="token punctuation">)</span><span
    class="token punctuation">;</span> <span class="token comment">//邓哥喜欢：秋葵，邓哥也喜欢：香菜。</span></span>
<span class="line"></span></code></pre>
            <div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0">
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
            </div>
        </div>
        <p>示例2</p>
        <div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre
            v-pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> container <span
            class="token operator">=</span> document<span class="token punctuation">.</span><span
            class="token function">getElementById</span><span class="token punctuation">(</span><span
            class="token string">"container"</span><span class="token punctuation">)</span><span
            class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> txt <span class="token operator">=</span> document<span
    class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span
    class="token string">"txt"</span><span class="token punctuation">)</span><span
    class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> btn <span class="token operator">=</span> document<span
    class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span
    class="token string">"btn"</span><span class="token punctuation">)</span><span
    class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">btn<span class="token punctuation">.</span><span
    class="token function-variable function">onclick</span> <span class="token operator">=</span> <span
    class="token keyword">function</span><span class="token punctuation">(</span><span
    class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    container<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> safe<span
    class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;p></span>
<span class="line">        </span><span class="token interpolation"><span
        class="token interpolation-punctuation punctuation">${</span>txt<span
        class="token punctuation">.</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span
        class="token string"></span>
<span class="line">    &lt;/p></span>
<span class="line">    &lt;h1></span>
<span class="line">        </span><span class="token interpolation"><span
        class="token interpolation-punctuation punctuation">${</span>txt<span
        class="token punctuation">.</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span
        class="token string"></span>
<span class="line">    &lt;/h1></span>
<span class="line">    </span><span class="token template-punctuation string">`</span></span><span
    class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">safe</span><span
    class="token punctuation">(</span><span class="token parameter">parts</span><span class="token punctuation">)</span><span
    class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> values <span class="token operator">=</span> <span
    class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span
    class="token punctuation">.</span><span class="token function">slice</span><span
    class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>arguments<span
    class="token punctuation">)</span><span class="token punctuation">.</span><span
    class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span
    class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> str <span class="token operator">=</span> <span
    class="token string">""</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span
    class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span
    class="token punctuation">;</span> i <span class="token operator">&lt;</span> values<span class="token punctuation">.</span>length<span
    class="token punctuation">;</span> i<span class="token operator">++</span><span
    class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> v <span class="token operator">=</span> values<span
    class="token punctuation">[</span>i<span class="token punctuation">]</span><span
    class="token punctuation">.</span><span class="token function">replace</span><span
    class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span
    class="token regex-source language-regex">&lt;</span><span class="token regex-delimiter">/</span><span
    class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">"&amp;lt;"</span><span
    class="token punctuation">)</span><span class="token punctuation">.</span><span
    class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span
    class="token regex-delimiter">/</span><span class="token regex-source language-regex">></span><span
    class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span
    class="token punctuation">,</span> <span class="token string">"&amp;gt;"</span><span
    class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        str <span class="token operator">+=</span> parts<span
    class="token punctuation">[</span>i<span class="token punctuation">]</span> <span
    class="token operator">+</span> v<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span
    class="token operator">===</span> values<span class="token punctuation">.</span>length <span class="token operator">-</span> <span
    class="token number">1</span><span class="token punctuation">)</span> <span
    class="token punctuation">{</span></span>
<span class="line">            str <span class="token operator">+=</span> parts<span class="token punctuation">[</span>i <span
    class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span
    class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> str<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
            <div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0">
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
            </div>
        </div>
        <h2 id="将所有字符视为普通字符-string-raw" tabindex="-1"><a class="header-anchor"
                                                                    href="#将所有字符视为普通字符-string-raw"><span>将所有字符视为普通字符 String.raw</span></a>
        </h2>
        <div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre
            v-pre class="language-javascript"><code><span class="line"><span class="token keyword">var</span> text <span
            class="token operator">=</span> String<span class="token punctuation">.</span>raw<span
            class="token template-string"><span class="token template-punctuation string">`</span><span
            class="token string">abc\t\nbcd</span><span class="token template-punctuation string">`</span></span><span
            class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span
    class="token punctuation">(</span>text<span class="token punctuation">)</span><span
    class="token punctuation">;</span> <span class="token comment">//abc\t\nbcd</span></span>
<span class="line"></span></code></pre>
            <div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0">
                <div class="line-number"></div>
                <div class="line-number"></div>
                <div class="line-number"></div>
            </div>
        </div>
    </div>
</template>


