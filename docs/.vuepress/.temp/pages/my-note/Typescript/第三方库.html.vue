<template><div><h1 id="第三方库" tabindex="-1"><a class="header-anchor" href="#第三方库"><span>第三方库</span></a></h1>
<ul>
<li>ts-node 直接在内存中编译并执行，不生成js文件
<ul>
<li><code v-pre>cnpm i ts-node</code></li>
<li><code v-pre>ts-node src/index.ts</code></li>
</ul>
</li>
<li>nodemon 监视文件的改变 <code v-pre>&quot;dev&quot;:&quot;nodemon --watch src -e ts --exec ts-node src/index&quot;</code>
<ul>
<li><code v-pre>cnpm i nodemon</code></li>
<li><code v-pre>nodemon --watch src -e ts --exec ts-node src/index</code></li>
<li><code v-pre>--watch src</code> 只监控src中的文件</li>
<li><code v-pre>-e ts</code> 只监控ts文件</li>
</ul>
</li>
</ul>
</div></template>


