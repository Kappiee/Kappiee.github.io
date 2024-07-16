<template>
    <div><h1 id="知名-公共、具名-符号" tabindex="-1"><a class="header-anchor" href="#知名-公共、具名-符号"><span>知名（公共、具名）符号</span></a>
    </h1>
        <p>知名符号是一些具有特殊含义的共享符号，通过 Symbol 的静态属性得到</p>
        <p>ES6 延续了 ES5 的思想：减少魔法，暴露内部实现！</p>
        <p>因此，ES6 用知名符号暴露了某些场景的内部实现</p>
        <h2 id="symbol-hasinstance" tabindex="-1"><a class="header-anchor" href="#symbol-hasinstance"><span>Symbol.hasInstance</span></a>
        </h2>
        <p>该符号用于定义构造函数的静态成员，它将影响 instanceof 的判定</p>
        <div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre
            v-pre class="language-javascript"><code><span class="line"></span>
<span class="line">obj <span class="token keyword">instanceof</span> <span class="token class-name">A</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//等效于</span></span>
<span class="line"></span>
<span class="line"><span class="token constant">A</span><span class="token punctuation">[</span>Symbol<span
    class="token punctuation">.</span>hasInstance<span class="token punctuation">]</span><span
    class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token comment">// Function.prototype[Symbol.hasInstance]</span></span>
<span class="line"></span>
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
        <p>示例</p>
        <div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre
            v-pre class="language-javascript"><code><span class="line"><span class="token keyword">function</span> <span
            class="token constant">A</span><span class="token punctuation">(</span><span
            class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span
    class="token operator">=</span> <span class="token string">"A"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// console.log(A[Symbol.hasInstance](obj)); // 等效于Function.prototype[Symbol.hasInstance] 修改Symbol.hasInstance的方法</span></span>
<span class="line">Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span
    class="token punctuation">(</span><span class="token constant">A</span><span class="token punctuation">,</span> Symbol<span
    class="token punctuation">.</span>hasInstance<span class="token punctuation">,</span> <span
    class="token punctuation">{</span></span>
<span class="line">    <span class="token function-variable function">value</span><span class="token operator">:</span> <span
    class="token keyword">function</span> <span class="token punctuation">(</span><span
    class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span
    class="token punctuation">(</span><span class="token string">"判断obj"</span><span
    class="token punctuation">,</span>obj<span class="token punctuation">)</span><span
    class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token boolean">false</span><span
    class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span
    class="token keyword">new</span> <span class="token class-name">A</span><span
    class="token punctuation">(</span><span class="token punctuation">)</span><span
    class="token punctuation">;</span></span>
<span class="line">obj<span class="token punctuation">.</span>name <span class="token operator">=</span> <span
    class="token string">"obj"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span
    class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span
    class="token class-name">A</span><span class="token punctuation">)</span><span
    class="token punctuation">;</span></span>
<span class="line"></span>
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
            </div>
        </div>
        <h2 id="扩展-symbol-isconcatspreadable" tabindex="-1"><a class="header-anchor"
                                                                 href="#扩展-symbol-isconcatspreadable"><span>[扩展] Symbol.isConcatSpreadable</span></a>
        </h2>
        <p>该知名符号会影响数组的 concat 方法</p>
        <p>示例</p>
        <div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre
            v-pre class="language-javascript"><code><span class="line"><span
            class="token keyword">const</span> arr <span class="token operator">=</span> <span
            class="token punctuation">[</span><span class="token number">3</span><span
            class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> arr2 <span class="token operator">=</span> <span
    class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span
    class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span
    class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span
    class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">arr2<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>isConcatSpreadable<span
    class="token punctuation">]</span> <span class="token operator">=</span> <span
    class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> result <span class="token operator">=</span> arr<span
    class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span
    class="token number">56</span><span class="token punctuation">,</span> arr2<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//  [3, 56, [5,6,7,8]] //arr2[Symbol.isConcatSpreadable] = false;</span></span>
<span class="line"><span
    class="token comment">//  [3, 56, 5, 6, 7, 8] //arr2[Symbol.isConcatSpreadable] = true; 默认</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span
    class="token punctuation">(</span>result<span class="token punctuation">)</span></span>
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
            </div>
        </div>
        <p>示例，<strong>将对象分割后放入数组中</strong> （对象中存在<code v-pre>length</code> 且 存在<code v-pre>[Symbol.isConcatSpreadable]:
            true</code>）</p>
        <div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre
            v-pre class="language-javascript"><code><span class="line"><span
            class="token keyword">const</span> arr <span class="token operator">=</span> <span
            class="token punctuation">[</span><span class="token number">1</span><span
            class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span
    class="token punctuation">{</span></span>
<span class="line">    <span class="token number">0</span><span class="token operator">:</span> <span
    class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token number">1</span><span class="token operator">:</span> <span
    class="token number">4</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">length</span><span class="token operator">:</span> <span
    class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>isConcatSpreadable<span
    class="token punctuation">]</span><span class="token operator">:</span> <span
    class="token boolean">true</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> result <span class="token operator">=</span> arr<span
    class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span
    class="token number">2</span><span class="token punctuation">,</span> obj<span
    class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span
    class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token comment">//[ 1, 2, 3, 4 ]</span></span>
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
            </div>
        </div>
        <h2 id="扩展-symbol-toprimitive" tabindex="-1"><a class="header-anchor" href="#扩展-symbol-toprimitive"><span>[扩展] Symbol.toPrimitive</span></a>
        </h2>
        <p>该知名符号会影响类型转换的结果</p>
        <p><code v-pre>console.log(obj * 123);</code> ==&gt;<strong>首先检查是否有Symbol.toPrimitive</strong>，没有则执行通常的转化（<code
            v-pre>obj.valueOf()</code> ==&gt; <code v-pre>obj.toString()</code> ==&gt; <code v-pre>parseInt(obj.toString())</code>），有则执行<code
            v-pre>Symbol.toPrimitive</code>中的方法<code v-pre>ToPrimitive ( input [ , preferredType ] )</code></p>
        <div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre
            v-pre class="language-javascript"><code><span class="line"><span
            class="token keyword">const</span> obj <span class="token operator">=</span> <span
            class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">a</span> <span
    class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">b</span> <span
    class="token operator">:</span> <span class="token number">2</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span
    class="token punctuation">(</span>obj <span class="token operator">*</span> <span
    class="token number">123</span><span class="token punctuation">)</span><span
    class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span
    class="token comment">//console.log(obj + 123); ==> obj.valueOf() ==> obj.toString() </span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span
    class="token punctuation">(</span>obj<span class="token punctuation">.</span><span
    class="token function">valueOf</span><span class="token punctuation">(</span><span
    class="token punctuation">)</span><span class="token punctuation">)</span><span
    class="token punctuation">;</span> <span class="token comment">//{ a: 1, b: 2 }</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span
    class="token punctuation">(</span>obj<span class="token punctuation">.</span><span
    class="token function">toString</span><span class="token punctuation">(</span><span
    class="token punctuation">)</span><span class="token punctuation">)</span><span
    class="token punctuation">;</span> <span class="token comment">//[object Object]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//console.log(obj * 123); ==>（首先检查是否有Symbol.toPrimitive，没有则执行通常的转化，有则执行Symbol.toPrimitive中的方法） obj.valueOf() ==> obj.toString() ==> parseInt(obj.toString())</span></span>
<span class="line"><span class="token comment">/*</span>
<span class="line">当执行 console.log(obj * 123); 时，JavaScript 会按照 ECMAScript 规范进行以下步骤：</span>
<span class="line"></span>
<span class="line">首先，JavaScript 引擎会尝试获取 obj 对象的值。</span>
<span class="line"></span>
<span class="line">然后，它会尝试将 obj 对象转换为一个原始值，以便进行乘法运算。这个过程被称为 "ToPrimitive" 转换。如果 obj 对象有 valueOf 方法并且返回一个原始值，那么 JavaScript 引擎会使用这个值。如果 obj 对象没有 valueOf 方法或者 valueOf 方法没有返回一个原始值，那么 JavaScript 引擎会尝试调用 obj 对象的 toString 方法并使用返回的字符串。</span>
<span class="line"></span>
<span class="line">一旦 obj 对象被转换为一个原始值，JavaScript 引擎就会尝试将这个原始值和 123 进行乘法运算。如果原始值是一个数字，那么这个运算就会成功。如果原始值不是一个数字（例如，一个字符串），那么 JavaScript 引擎会尝试将这个原始值转换为一个数字。</span>
<span class="line"></span>
<span class="line">如果原始值不能被转换为一个数字，那么乘法运算会返回 NaN。</span>
<span class="line"></span>
<span class="line">最后，console.log 会将运算结果输出到控制台。</span>
<span class="line">*/</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span
    class="token punctuation">(</span>obj<span class="token punctuation">.</span><span
    class="token function">valueOf</span><span class="token punctuation">(</span><span
    class="token punctuation">)</span><span class="token punctuation">)</span><span
    class="token punctuation">;</span> <span class="token comment">//{ a: 1, b: 2 }</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span
    class="token punctuation">(</span>obj<span class="token punctuation">.</span><span
    class="token function">toString</span><span class="token punctuation">(</span><span
    class="token punctuation">)</span><span class="token punctuation">)</span><span
    class="token punctuation">;</span> <span class="token comment">//[object Object]</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span
    class="token punctuation">(</span><span class="token function">parseInt</span><span
    class="token punctuation">(</span>obj<span class="token punctuation">.</span><span
    class="token function">toString</span><span class="token punctuation">(</span><span
    class="token punctuation">)</span><span class="token punctuation">)</span><span
    class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//NaN</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 通过 Symbol.toPrimitive 来影响转换结果</span></span>
<span class="line">obj<span class="token punctuation">[</span>Symbol<span
    class="token punctuation">.</span>toPrimitive<span class="token punctuation">]</span> <span
    class="token operator">=</span> <span class="token keyword">function</span><span
    class="token punctuation">(</span><span class="token punctuation">)</span><span
    class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token number">2</span><span
    class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span
    class="token punctuation">(</span>obj <span class="token operator">*</span> <span
    class="token number">123</span><span class="token punctuation">)</span><span
    class="token punctuation">;</span> <span class="token comment">//246</span></span>
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
            </div>
        </div>
        <h2 id="扩展-symbol-tostringtag" tabindex="-1"><a class="header-anchor" href="#扩展-symbol-tostringtag"><span>[扩展] Symbol.toStringTag</span></a>
        </h2>
        <p>该知名符号会影响 Object.prototype.toString 的返回值</p>
        <p>示例</p>
        <div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre
            v-pre class="language-javascript"><code><span class="line"><span class="token keyword">class</span> <span
            class="token class-name">Person</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">    <span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>toStringTag<span
    class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"Person"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> p <span class="token operator">=</span> <span
    class="token keyword">new</span> <span class="token class-name">Person</span><span
    class="token punctuation">(</span><span class="token punctuation">)</span><span
    class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> arr <span class="token operator">=</span> <span
    class="token punctuation">[</span><span class="token number">32424</span><span
    class="token punctuation">,</span> <span class="token number">45654</span><span
    class="token punctuation">,</span> <span class="token number">32</span><span
    class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span
    class="token punctuation">(</span><span class="token class-name">Object</span><span
    class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span
    class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>p<span
    class="token punctuation">)</span><span class="token punctuation">)</span><span
    class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span
    class="token punctuation">(</span><span class="token class-name">Object</span><span
    class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span
    class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>arr<span
    class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
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
            </div>
        </div>
        <h2 id="其他知名符号" tabindex="-1"><a class="header-anchor" href="#其他知名符号"><span>其他知名符号</span></a>
        </h2>
    </div>
</template>


