<template>
    <div><h1 id="面向对象简介" tabindex="-1"><a class="header-anchor" href="#面向对象简介"><span>面向对象简介</span></a>
    </h1>
        <p>面向对象：一种编程思想，跟具体的语言</p>
        <p>对比面向过程：</p>
        <p>【大象装冰箱】示例</p>
        <h2 id="面向过程-思考的切入点是功能的步骤" tabindex="-1"><a class="header-anchor"
                                                                    href="#面向过程-思考的切入点是功能的步骤"><span>面向过程：思考的切入点是功能的步骤</span></a>
        </h2>
        <div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre
            v-pre class="language-javascript"><code><span class="line"><span
            class="token comment">//1. 冰箱门打开</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">openFreezer</span><span
    class="token punctuation">(</span><span class="token punctuation">)</span><span
    class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">openFreezer</span><span class="token punctuation">(</span><span
    class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//2. 大象装进去</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">elephantIn</span><span
    class="token punctuation">(</span><span class="token punctuation">)</span><span
    class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">elephantIn</span><span class="token punctuation">(</span><span
    class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//3. 冰箱门关上</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">closeFreezer</span><span
    class="token punctuation">(</span><span class="token punctuation">)</span><span
    class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">closeFreezer</span><span class="token punctuation">(</span><span
    class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
            </div>
        </div>
        <h2 id="面向对象-思考的切入点是对象的划分" tabindex="-1"><a class="header-anchor"
                                                                    href="#面向对象-思考的切入点是对象的划分"><span>面向对象：思考的切入点是对象的划分</span></a>
        </h2>
        <div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre
            v-pre class="language-javascript"><code><span class="line"><span
            class="token doc-comment comment">/**</span>
<span class="line"> * 大象</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Elephant</span><span
    class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 冰箱</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Freezer</span><span
    class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">Freezer</span><span class="token punctuation">.</span>prototype<span
    class="token punctuation">.</span><span class="token function-variable function">openDoor</span> <span
    class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span
    class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">Freezer</span><span class="token punctuation">.</span>prototype<span
    class="token punctuation">.</span><span class="token function-variable function">closeDoor</span> <span
    class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span
    class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">Freezer</span><span class="token punctuation">.</span>prototype<span
    class="token punctuation">.</span><span class="token function-variable function">join</span> <span
    class="token operator">=</span> <span class="token keyword">function</span><span
    class="token punctuation">(</span><span class="token parameter">something</span><span
    class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span
    class="token function">openDoor</span><span class="token punctuation">(</span><span
    class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">//装东西</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span
    class="token function">closeDoor</span><span class="token punctuation">(</span><span
    class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//1. 冰箱门打开</span></span>
<span class="line"><span class="token comment">// var frig = new Freezer();</span></span>
<span class="line"><span class="token comment">// frig.openDoor();</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// //2. 大象装进去</span></span>
<span class="line"><span class="token comment">// var ele = new Elephant();</span></span>
<span class="line"><span class="token comment">// frig.join(ele);</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// //3. 冰箱门关上</span></span>
<span class="line"><span class="token comment">// frig.closeDoor();</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> frig <span class="token operator">=</span> <span
    class="token keyword">new</span> <span class="token class-name">Freezer</span><span
    class="token punctuation">(</span><span class="token punctuation">)</span><span
    class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">frig<span class="token punctuation">.</span><span class="token function">join</span><span
    class="token punctuation">(</span><span class="token keyword">new</span> <span
    class="token class-name">Elephant</span><span class="token punctuation">(</span><span
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
    </div>
</template>


