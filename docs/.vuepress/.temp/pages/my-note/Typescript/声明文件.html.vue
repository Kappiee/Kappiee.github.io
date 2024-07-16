<template><div><h1 id="声明文件" tabindex="-1"><a class="header-anchor" href="#声明文件"><span>声明文件</span></a></h1>
<p>以<code v-pre>.d.ts</code> 结尾的文件</p>
<h2 id="作用" tabindex="-1"><a class="header-anchor" href="#作用"><span>作用</span></a></h2>
<ul>
<li>为Js代码提供类型声明</li>
</ul>
<h2 id="声明文件的位置" tabindex="-1"><a class="header-anchor" href="#声明文件的位置"><span>声明文件的位置</span></a></h2>
<ul>
<li>放置到<code v-pre>tsconfig.json</code>中<code v-pre>include</code>中的文件夹中</li>
<li>放置到<code v-pre>node_modules/@types</code>文件夹中</li>
<li>手动配置<code v-pre>&quot;typeRoots&quot;:[&quot;./types&quot;]</code></li>
<li>与Js代码所在目录相同，并且文件名也相同的文件（建议）</li>
</ul>
<h2 id="发布" tabindex="-1"><a class="header-anchor" href="#发布"><span>发布</span></a></h2>
<p>配置<code v-pre>tsconfig.json</code>中<code v-pre>&quot;declaration&quot;:true</code>发布后生成声明文件</p>
<h2 id="手动编写" tabindex="-1"><a class="header-anchor" href="#手动编写"><span>手动编写</span></a></h2>
<ul>
<li>对已有js库，更改为ts成本较高，可以使用手动编写声明文件</li>
<li>第三方js库，没有提供声明文件</li>
</ul>
<p>示例</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line">declare <span class="token keyword">var</span> console<span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">log</span><span class="token punctuation">(</span>message<span class="token operator">?</span><span class="token operator">:</span>any<span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


