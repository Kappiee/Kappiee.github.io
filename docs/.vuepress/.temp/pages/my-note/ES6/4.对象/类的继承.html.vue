<template>
    <div><h1 id="类的继承" tabindex="-1"><a class="header-anchor" href="#类的继承"><span>类的继承</span></a></h1>
        <p>如果两个类A和B，如果可以描述为：B 是 A，则，A和B形成继承关系</p>
        <p>如果B是A，则：</p>
        <ol>
            <li>B继承自A</li>
            <li>A派生B</li>
            <li>B是A的子类</li>
            <li>A是B的父类</li>
        </ol>
        <p>如果A是B的父类，则B会自动拥有A中的所有实例成员。</p>
        <p>新的关键字：</p>
        <ul>
            <li>extends：继承，用于类的定义</li>
            <li>super
                <ul>
                    <li>直接当作函数调用，表示父类构造函数</li>
                    <li>如果当作对象使用，则表示父类的原型</li>
                </ul>
            </li>
        </ul>
        <p>注意：ES6要求，如果定义了constructor，并且该类是子类，则必须在constructor的第一行手动调用父类的构造函数</p>
        <p>如果子类不写constructor，则会有默认的构造器，该构造器需要的参数和父类一致，并且自动调用父类构造器</p>
        <p>【冷知识】</p>
        <ul>
            <li>用JS制作抽象类
                <ul>
                    <li>抽象类：一般是父类，不能通过该类创建对象</li>
                </ul>
            </li>
            <li>正常情况下，this的指向，this始终指向具体的类的对象</li>
        </ul>
        <p>以前做法示例</p>
        <div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre
            v-pre class="language-javascript"><code><span class="line"><span class="token keyword">function</span> <span
            class="token function">Animal</span><span class="token punctuation">(</span><span class="token parameter">type<span
            class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span
            class="token punctuation">,</span> sex</span><span class="token punctuation">)</span> <span
            class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>type <span
    class="token operator">=</span> type<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span
    class="token operator">=</span> name<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span
    class="token operator">=</span> age<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>sex <span
    class="token operator">=</span> sex<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token class-name">Animal</span><span class="token punctuation">.</span>prototype<span
    class="token punctuation">.</span><span class="token function-variable function">print</span> <span
    class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span
    class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span
    class="token punctuation">(</span><span class="token template-string"><span
    class="token template-punctuation string">`</span><span class="token string">【种类】：</span><span
    class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span
    class="token keyword">this</span><span class="token punctuation">.</span>type<span
    class="token interpolation-punctuation punctuation">}</span></span><span
    class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span
    class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span
    class="token punctuation">(</span><span class="token template-string"><span
    class="token template-punctuation string">`</span><span class="token string">【名字】：</span><span
    class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span
    class="token keyword">this</span><span class="token punctuation">.</span>name<span
    class="token interpolation-punctuation punctuation">}</span></span><span
    class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span
    class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span
    class="token punctuation">(</span><span class="token template-string"><span
    class="token template-punctuation string">`</span><span class="token string">【年龄】：</span><span
    class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span
    class="token keyword">this</span><span class="token punctuation">.</span>age<span
    class="token interpolation-punctuation punctuation">}</span></span><span
    class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span
    class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span
    class="token punctuation">(</span><span class="token template-string"><span
    class="token template-punctuation string">`</span><span class="token string">【性别】：</span><span
    class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span
    class="token keyword">this</span><span class="token punctuation">.</span>sex<span
    class="token interpolation-punctuation punctuation">}</span></span><span
    class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span
    class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Dog</span><span
    class="token punctuation">(</span><span class="token parameter">name<span
    class="token punctuation">,</span> age<span class="token punctuation">,</span> sex</span><span
    class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//借用父类的构造函数</span></span>
<span class="line">    <span class="token function">Animal</span><span class="token punctuation">.</span><span
    class="token function">call</span><span class="token punctuation">(</span><span
    class="token keyword">this</span><span class="token punctuation">,</span> <span
    class="token string">"犬类"</span><span class="token punctuation">,</span> name<span
    class="token punctuation">,</span> age<span class="token punctuation">,</span> sex<span
    class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//没有继承方法，使用该种方式继承</span></span>
<span class="line">Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span
    class="token punctuation">(</span><span class="token class-name">Dog</span><span class="token punctuation">.</span>prototype<span
    class="token punctuation">,</span> <span class="token class-name">Animal</span><span
    class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span
    class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> d <span class="token operator">=</span> <span
    class="token keyword">new</span> <span class="token class-name">Dog</span><span
    class="token punctuation">(</span><span class="token string">"旺财"</span><span
    class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span
    class="token string">"公"</span><span class="token punctuation">)</span><span
    class="token punctuation">;</span></span>
<span class="line">d<span class="token punctuation">.</span><span class="token function">print</span><span
    class="token punctuation">(</span><span class="token punctuation">)</span><span
    class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span
    class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
        <p>ES6示例</p>
        <div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre
            v-pre class="language-javascript"><code><span class="line"><span class="token keyword">class</span> <span
            class="token class-name">Animal</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">constructor</span><span class="token punctuation">(</span><span
    class="token parameter">type<span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span
    class="token punctuation">,</span> sex</span><span class="token punctuation">)</span> <span
    class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>type <span
    class="token operator">=</span> type<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span
    class="token operator">=</span> name<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span
    class="token operator">=</span> age<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>sex <span
    class="token operator">=</span> sex<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">print</span><span class="token punctuation">(</span><span
    class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span
    class="token punctuation">(</span><span class="token template-string"><span
    class="token template-punctuation string">`</span><span class="token string">【种类】：</span><span
    class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span
    class="token keyword">this</span><span class="token punctuation">.</span>type<span
    class="token interpolation-punctuation punctuation">}</span></span><span
    class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span
    class="token punctuation">;</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span
    class="token punctuation">(</span><span class="token template-string"><span
    class="token template-punctuation string">`</span><span class="token string">【名字】：</span><span
    class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span
    class="token keyword">this</span><span class="token punctuation">.</span>name<span
    class="token interpolation-punctuation punctuation">}</span></span><span
    class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span
    class="token punctuation">;</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span
    class="token punctuation">(</span><span class="token template-string"><span
    class="token template-punctuation string">`</span><span class="token string">【年龄】：</span><span
    class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span
    class="token keyword">this</span><span class="token punctuation">.</span>age<span
    class="token interpolation-punctuation punctuation">}</span></span><span
    class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span
    class="token punctuation">;</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span
    class="token punctuation">(</span><span class="token template-string"><span
    class="token template-punctuation string">`</span><span class="token string">【性别】：</span><span
    class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span
    class="token keyword">this</span><span class="token punctuation">.</span>sex<span
    class="token interpolation-punctuation punctuation">}</span></span><span
    class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span
    class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">jiao</span><span class="token punctuation">(</span><span
    class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span
    class="token class-name">Error</span><span class="token punctuation">(</span><span
    class="token string">"动物怎么叫的？"</span><span class="token punctuation">)</span><span
    class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Dog</span> <span
    class="token keyword">extends</span> <span class="token class-name">Animal</span> <span
    class="token punctuation">{</span></span>
<span class="line">    <span class="token function">constructor</span><span class="token punctuation">(</span><span
    class="token parameter">name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> sex</span><span
    class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">super</span><span class="token punctuation">(</span><span
    class="token string">"犬类"</span><span class="token punctuation">,</span> name<span
    class="token punctuation">,</span> age<span class="token punctuation">,</span> sex<span
    class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 必须写super(),不写则生成一模一样的类</span></span>
<span class="line">        <span class="token comment">// 子类特有的属性</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>loves <span
    class="token operator">=</span> <span class="token string">"吃骨头"</span><span
    class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">print</span><span class="token punctuation">(</span><span
    class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//调用父类的print</span></span>
<span class="line">        <span class="token keyword">super</span><span class="token punctuation">.</span><span
    class="token function">print</span><span class="token punctuation">(</span><span
    class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//自己特有的代码</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span
    class="token punctuation">(</span><span class="token template-string"><span
    class="token template-punctuation string">`</span><span class="token string">【爱好】：</span><span
    class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span
    class="token keyword">this</span><span class="token punctuation">.</span>loves<span
    class="token interpolation-punctuation punctuation">}</span></span><span
    class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span
    class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    <span class="token comment">//同名方法，会覆盖父类</span></span>
<span class="line">    <span class="token function">jiao</span><span class="token punctuation">(</span><span
    class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span
    class="token punctuation">(</span><span class="token string">"旺旺！"</span><span
    class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> d <span class="token operator">=</span> <span
    class="token keyword">new</span> <span class="token class-name">Dog</span><span
    class="token punctuation">(</span><span class="token string">"旺财"</span><span
    class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span
    class="token string">"公"</span><span class="token punctuation">)</span><span
    class="token punctuation">;</span></span>
<span class="line">d<span class="token punctuation">.</span><span class="token function">print</span><span
    class="token punctuation">(</span><span class="token punctuation">)</span><span
    class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span
    class="token punctuation">(</span>d<span class="token punctuation">)</span></span>
<span class="line">d<span class="token punctuation">.</span><span class="token function">jiao</span><span
    class="token punctuation">(</span><span class="token punctuation">)</span><span
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
                <div class="line-number"></div>
                <div class="line-number"></div>
            </div>
        </div>
    </div>
</template>


