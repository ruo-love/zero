import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.cabaa8cf.js";const B=JSON.parse('{"title":"自动清空上次打包资源","description":"","frontmatter":{},"headers":[],"relativePath":"articles/project/webpack/base/clean.md","filePath":"articles/project/webpack/base/clean.md","lastUpdated":1694668148000}'),p={name:"articles/project/webpack/base/clean.md"},o=l(`<h1 id="%E8%87%AA%E5%8A%A8%E6%B8%85%E7%A9%BA%E4%B8%8A%E6%AC%A1%E6%89%93%E5%8C%85%E8%B5%84%E6%BA%90" tabindex="-1">自动清空上次打包资源 <a class="header-anchor" href="#自动清空上次打包资源" aria-label="Permalink to &quot;自动清空上次打包资源&quot;">​</a></h1><h2 id="1.%20%E9%85%8D%E7%BD%AE" tabindex="-1">1. 配置 <a class="header-anchor" href="#1. 配置" aria-label="Permalink to &quot;1. 配置&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-light has-highlighted-lines"><code><span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">path</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#59873A;">require</span><span style="color:#999999;">(</span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">path</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#998418;">module</span><span style="color:#999999;">.</span><span style="color:#998418;">exports</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#998418;">entry</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">./src/main.js</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#998418;">output</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#998418;">path</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">path</span><span style="color:#999999;">.</span><span style="color:#59873A;">resolve</span><span style="color:#999999;">(</span><span style="color:#B07D48;">__dirname</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">dist</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">),</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#998418;">filename</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">static/js/main.js</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">,</span></span>
<span class="line highlighted"><span style="color:#393A34;">    </span><span style="color:#998418;">clean</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">true</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// 自动将上次打包目录资源清空</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#998418;">module</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#998418;">rules</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">[</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#999999;">        </span><span style="color:#A0ADA0;">// 用来匹配 .css 结尾的文件</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#998418;">test</span><span style="color:#999999;">:</span><span style="color:#AB5E3F;"> </span><span style="color:#B5695999;">/</span><span style="color:#BDA437;">\\.</span><span style="color:#AB5E3F;">css</span><span style="color:#1E754F;">$</span><span style="color:#B5695999;">/</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#999999;">        </span><span style="color:#A0ADA0;">// use 数组里面 Loader 执行顺序是从右到左</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#998418;">use</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">[</span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">style-loader</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">css-loader</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">],</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#998418;">test</span><span style="color:#999999;">:</span><span style="color:#AB5E3F;"> </span><span style="color:#B5695999;">/</span><span style="color:#BDA437;">\\.</span><span style="color:#AB5E3F;">less</span><span style="color:#1E754F;">$</span><span style="color:#B5695999;">/</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#998418;">use</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">[</span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">style-loader</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">css-loader</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">less-loader</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">],</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#998418;">test</span><span style="color:#999999;">:</span><span style="color:#AB5E3F;"> </span><span style="color:#B5695999;">/</span><span style="color:#BDA437;">\\.</span><span style="color:#AB5E3F;">s</span><span style="color:#999999;">[</span><span style="color:#A65E2B;">ac</span><span style="color:#999999;">]</span><span style="color:#AB5E3F;">ss</span><span style="color:#1E754F;">$</span><span style="color:#B5695999;">/</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#998418;">use</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">[</span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">style-loader</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">css-loader</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">sass-loader</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">],</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#998418;">test</span><span style="color:#999999;">:</span><span style="color:#AB5E3F;"> </span><span style="color:#B5695999;">/</span><span style="color:#BDA437;">\\.</span><span style="color:#AB5E3F;">styl</span><span style="color:#1E754F;">$</span><span style="color:#B5695999;">/</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#998418;">use</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">[</span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">style-loader</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">css-loader</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">stylus-loader</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">],</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#998418;">test</span><span style="color:#999999;">:</span><span style="color:#AB5E3F;"> </span><span style="color:#B5695999;">/</span><span style="color:#BDA437;">\\.</span><span style="color:#999999;">(</span><span style="color:#AB5E3F;">png</span><span style="color:#AB5959;">|</span><span style="color:#AB5E3F;">jpe</span><span style="color:#AB5959;">?</span><span style="color:#AB5E3F;">g</span><span style="color:#AB5959;">|</span><span style="color:#AB5E3F;">gif</span><span style="color:#AB5959;">|</span><span style="color:#AB5E3F;">webp</span><span style="color:#999999;">)</span><span style="color:#1E754F;">$</span><span style="color:#B5695999;">/</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#998418;">type</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">asset</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#998418;">parser</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#998418;">dataUrlCondition</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#998418;">maxSize</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">40</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">*</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">1024</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// 小于40kb的图片会被base64处理</span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#998418;">generator</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#999999;">          </span><span style="color:#A0ADA0;">// 将图片文件输出到 static/imgs 目录中</span></span>
<span class="line"><span style="color:#999999;">          </span><span style="color:#A0ADA0;">// 将图片文件命名 [hash:8][ext][query]</span></span>
<span class="line"><span style="color:#999999;">          </span><span style="color:#A0ADA0;">// [hash:8]: hash值取8位</span></span>
<span class="line"><span style="color:#999999;">          </span><span style="color:#A0ADA0;">// [ext]: 使用之前的文件扩展名</span></span>
<span class="line"><span style="color:#999999;">          </span><span style="color:#A0ADA0;">// [query]: 添加之前的query参数</span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#998418;">filename</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">static/imgs/[hash:8][ext][query]</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">],</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#998418;">plugins</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">[],</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#998418;">mode</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">development</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#999999;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div><h2 id="2.%20%E8%BF%90%E8%A1%8C%E6%8C%87%E4%BB%A4" tabindex="-1">2. 运行指令 <a class="header-anchor" href="#2. 运行指令" aria-label="Permalink to &quot;2. 运行指令&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vitesse-light"><code><span class="line"><span style="color:#393a34;">npx webpack</span></span></code></pre></div><p>观察 dist 目录资源情况</p>`,6),e=[o];function r(c,t,y,i,A,u){return n(),a("div",null,e)}const m=s(p,[["render",r]]);export{B as __pageData,m as default};
