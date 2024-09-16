import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,f as t}from"./app-CVl1bgfN.js";const e={},p=t(`<h1 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h1><h4 id="基础排序" tabindex="-1"><a class="header-anchor" href="#基础排序"><span>基础排序</span></a></h4><blockquote><p>int[]，double[]，char[]等基数据类型的数组，Arrays类之只是提供了默认的升序排列，没有提供相应的降序排列方法</p><p>如果是String[]数组，Arrays.sort（）默认按照字典序升序排序</p><p>如果是ArrayList&lt; String&gt;，要采用Collections.sort来根据字典序升序排序，如果要逆序：Collections.reverse(words);</p></blockquote><h4 id="自定义类activity类如何自定义排序" tabindex="-1"><a class="header-anchor" href="#自定义类activity类如何自定义排序"><span>自定义类Activity类如何自定义排序：</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>  <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Activity</span><span class="token punctuation">&gt;</span></span> activities
activities<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token class-name">Comparator</span><span class="token punctuation">.</span><span class="token function">comparingInt</span><span class="token punctuation">(</span>a <span class="token operator">-&gt;</span> a<span class="token punctuation">.</span>end<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="基本类型二维数组int-如何自定义排序" tabindex="-1"><a class="header-anchor" href="#基本类型二维数组int-如何自定义排序"><span>基本类型二维数组int[ ] [ ]如何自定义排序？</span></a></h4><blockquote><p>方法1：</p><p>二维数组按照第一维度（或者别的维度）排序，用这个：</p><p>因为compare 是一个内置的静态方法，它的实现是安全的，不会溢出，</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>points<span class="token punctuation">,</span> <span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">compare</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><blockquote><p>方法2：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>intervals<span class="token punctuation">,</span><span class="token class-name">Comparator</span><span class="token punctuation">.</span><span class="token function">comparingInt</span><span class="token punctuation">(</span>a <span class="token operator">-&gt;</span>a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
注意a后面还有一个空格才能接这个符号 <span class="token operator">-&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>而不用这个：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>
<span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>points<span class="token punctuation">,</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>

          <span class="token keyword">return</span> a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">-</span>b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>当a[0]-b[0]非常大或者非常小的时候会导致整数溢出</strong></p><p>或者这个：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">//按照区间的开始排序,传入比较器</span>
<span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>intervals<span class="token punctuation">,</span><span class="token keyword">new</span> <span class="token class-name">Comparator</span><span class="token operator">&lt;</span><span class="token keyword">int</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">compare</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">,</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span>  b<span class="token punctuation">)</span><span class="token punctuation">{</span>

<span class="token keyword">return</span> a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">-</span>b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//最外层的括号是sort的</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>`,8),o=[p];function c(i,l){return a(),s("div",null,o)}const d=n(e,[["render",c],["__file","注意事项.html.vue"]]),k=JSON.parse('{"path":"/posts/%E7%AE%97%E6%B3%95/%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9.html","title":"注意事项","lang":"zh-CN","frontmatter":{"cover":"/assets/images/cover2.jpg","icon":"pen-to-square","date":"2024-05-09T00:00:00.000Z","category":["算法"],"tag":["算法"],"star":true,"sticky":true,"description":"注意事项 基础排序 int[]，double[]，char[]等基数据类型的数组，Arrays类之只是提供了默认的升序排列，没有提供相应的降序排列方法 如果是String[]数组，Arrays.sort（）默认按照字典序升序排序 如果是ArrayList< String>，要采用Collections.sort来根据字典序升序排序，如果要逆序：Coll...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/my-docs/posts/%E7%AE%97%E6%B3%95/%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9.html"}],["meta",{"property":"og:site_name","content":"主页"}],["meta",{"property":"og:title","content":"注意事项"}],["meta",{"property":"og:description","content":"注意事项 基础排序 int[]，double[]，char[]等基数据类型的数组，Arrays类之只是提供了默认的升序排列，没有提供相应的降序排列方法 如果是String[]数组，Arrays.sort（）默认按照字典序升序排序 如果是ArrayList< String>，要采用Collections.sort来根据字典序升序排序，如果要逆序：Coll..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mister-hope.github.io/my-docs/assets/images/cover2.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-16T07:32:31.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://mister-hope.github.io/my-docs/assets/images/cover2.jpg"}],["meta",{"name":"twitter:image:alt","content":"注意事项"}],["meta",{"property":"article:author","content":"MiniW"}],["meta",{"property":"article:tag","content":"算法"}],["meta",{"property":"article:published_time","content":"2024-05-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-16T07:32:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"注意事项\\",\\"image\\":[\\"https://mister-hope.github.io/my-docs/assets/images/cover2.jpg\\"],\\"datePublished\\":\\"2024-05-09T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-16T07:32:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MiniW\\"}]}"]]},"headers":[],"git":{"createdTime":1726470725000,"updatedTime":1726471951000,"contributors":[{"name":"MiniWH","email":"122033963+MiniWwww@users.noreply.github.com","commits":2}]},"readingTime":{"minutes":1.07,"words":321},"filePathRelative":"posts/算法/注意事项.md","localizedDate":"2024年5月9日","excerpt":"\\n<h4>基础排序</h4>\\n<blockquote>\\n<p>int[]，double[]，char[]等基数据类型的数组，Arrays类之只是提供了默认的升序排列，没有提供相应的降序排列方法</p>\\n<p>如果是String[]数组，Arrays.sort（）默认按照字典序升序排序</p>\\n<p>如果是ArrayList&lt; String&gt;，要采用Collections.sort来根据字典序升序排序，如果要逆序：Collections.reverse(words);</p>\\n</blockquote>\\n<h4>自定义类Activity类如何自定义排序：</h4>\\n<div class=\\"language-java\\" data-ext=\\"java\\" data-title=\\"java\\"><pre class=\\"language-java\\"><code>  <span class=\\"token class-name\\">List</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">Activity</span><span class=\\"token punctuation\\">&gt;</span></span> activities\\nactivities<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">sort</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">Comparator</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">comparingInt</span><span class=\\"token punctuation\\">(</span>a <span class=\\"token operator\\">-&gt;</span> a<span class=\\"token punctuation\\">.</span>end<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre></div>","autoDesc":true}');export{d as comp,k as data};
