webpackJsonp([50251783467618],{406:function(e,n){e.exports={data:{post:{html:'<h1 id="performance"><a href="#performance" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Performance</h1>\n<h2 id="enabling-the-builtin-http-cache-invalidation-system"><a href="#enabling-the-builtin-http-cache-invalidation-system" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Enabling the Builtin HTTP Cache Invalidation System</h2>\n<p>Exposing a hypermedia API has <a href="http://blog.theamazingrando.com/in-band-vs-out-of-band.html" target="_blank" rel="nofollow noopener noreferrer">many advantages</a>. One of\nthem is the ability to know exactly which resources are included in HTTP responses created by the API. We used this\nspecificity to make API Platform apps blazing fast.</p>\n<p>When the cache mechanism <a href="/docs/core/configuration">is enabled</a>, API Platform collects identifiers of every resources\nincluded in a given HTTP response (including lists, embedded documents and subresources) and returns them in a special\nHTTP header called <a href="https://support.cloudflare.com/hc/en-us/articles/206596608-How-to-Purge-Cache-Using-Cache-Tags-Enterprise-only-" target="_blank" rel="nofollow noopener noreferrer">Cache-Tags</a>.</p>\n<p>A <a href="https://en.wikipedia.org/wiki/Web_accelerator" target="_blank" rel="nofollow noopener noreferrer">cache reverse proxy</a> supporting cache tags (Varnish, CloudFlare,\nFastly…) must be put in front of the web server and store all responses returned by the API with a high\n<a href="https://en.wikipedia.org/wiki/Time_to_live" target="_blank" rel="nofollow noopener noreferrer">TTL</a>. When a resource is modified, API Platform takes care of purging all\nresponses containing it in the proxy’s cache. It means that after the first request, all subsequent requests will not\ntouch the web server, and will be served instantly from the cache. It also means that the content served will always be\nfresh, because the cache is purged in real time.</p>\n<p>The support for most specific cases such as the invalidation of collections when a document is added or removed or for\nrelationships and inverse relations is built-in.</p>\n<p>We also included <a href="https://varnish-cache.org/" target="_blank" rel="nofollow noopener noreferrer">Varnish</a> in the <a href="/docs/deployment/docker">Docker setup</a> provided with the\ndistribution of API Platform, so this feature works out of the box.</p>\n<p>Integration with Varnish and the Doctrine ORM is shipped with the core library. You can easily implement the support for\nany other proxy or persistence system.</p>\n<h2 id="enabling-the-metadata-cache"><a href="#enabling-the-metadata-cache" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Enabling the Metadata Cache</h2>\n<p>Computing metadata used by the bundle is a costly operation. Fortunately, metadata can be computed once and then cached.\nAPI Platform internally uses a <a href="http://www.php-fig.org/psr/psr-6/" target="_blank" rel="nofollow noopener noreferrer">PSR-6</a> cache. If the Symfony Cache Component is available\n(the default in the official distribution), it automatically enables the support for the best cache adapter available.</p>\n<p>Best performance is achieved using <a href="https://github.com/krakjoe/apcu" target="_blank" rel="nofollow noopener noreferrer">APCu</a>. Be sure to have the APCu extension installed\non your production server, API Platform will automatically use it.</p>\n<h2 id="using-ppm-php-pm"><a href="#using-ppm-php-pm" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using PPM (PHP-PM)</h2>\n<p>Response time of the API can be improved up to 15x by using <a href="https://github.com/php-pm/php-pm" target="_blank" rel="nofollow noopener noreferrer">PHP Process Manager</a>. If\nyou want to use it on your project, follow the documentation dedicated to Symfony on the PPM website.</p>\n<p>Keep in mind that PPM is still in an early stage of development and can cause issues in production.</p>\n<h2 id="doctrine-queries-and-indexes"><a href="#doctrine-queries-and-indexes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Doctrine Queries and Indexes</h2>\n<h3 id="search-filter"><a href="#search-filter" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Search Filter</h3>\n<p>When using the <code>SearchFilter</code> and case insensivity, Doctrine will use the <code>LOWER</code> SQL function. Depending on your\ndriver, you may want to carefully index it by using a <a href="http://use-the-index-luke.com/sql/where-clause/functions/case-insensitive-search" target="_blank" rel="nofollow noopener noreferrer">function-based\nindex</a> or it will impact performance\nwith a huge collection. <a href="http://use-the-index-luke.com/sql/where-clause/searching-for-ranges/like-performance-tuning" target="_blank" rel="nofollow noopener noreferrer">Here are some examples to index LIKE\nfilters</a> depending on your\ndatabase driver.</p>\n<h3 id="eager-loading"><a href="#eager-loading" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Eager loading</h3>\n<p>By default Doctrine comes with <a href="http://doctrine-orm.readthedocs.io/en/latest/reference/working-with-objects.html#by-lazy-loading" target="_blank" rel="nofollow noopener noreferrer">lazy loading</a>.\nUsually a killer time-saving feature and also a performance killer with large applications.</p>\n<p>Fortunately, Doctrine proposes another approach to remedy this problem: <a href="http://doctrine-orm.readthedocs.io/en/latest/reference/working-with-objects.html#by-eager-loading" target="_blank" rel="nofollow noopener noreferrer">eager loading</a>.\nThis can easily be enabled for a relation: <code>@ORM\\ManyToOne(fetch="EAGER")</code>.</p>\n<p>By default in API Platform, we made the choice to force eager loading for all relations, with or without the Doctrine\n<code>fetch</code> attribute. Thanks to the eager loading <a href="/docs/core/extensions">extension</a>. The <code>EagerLoadingExtension</code> will join every\nreadable association according to the serialization context. If you want to fetch an association that is not serializable\nyou\'ve to bypass <code>readable</code> and <code>readableLink</code> by using the <code>fetchEager</code> attribute on the property declaration, for example:</p>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code><span class="token comment">/**\n * @ApiProperty(attributes={"fetchEager": true})\n */</span>\n <span class="token keyword">public</span> <span class="token variable">$foo</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h4 id="max-joins"><a href="#max-joins" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Max joins</h4>\n<p>There is a default restriction with this feature. We allow up to 30 joins per query. Beyond, an\n<code>ApiPlatform\\Core\\Exception\\RuntimeException</code> exception will be thrown but this value can easily be increased with a\nlittle of configuration:</p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code><span class="token comment"># app/config/config.yaml</span>\n<span class="token key atrule">api_platform</span><span class="token punctuation">:</span>\n    <span class="token key atrule">eager_loading</span><span class="token punctuation">:</span>\n        <span class="token key atrule">max_joins</span><span class="token punctuation">:</span> <span class="token number">100</span>\n</code></pre>\n      </div>\n<p>Be careful when you exceed this limit, it\'s often caused by the result of a circular reference. <a href="/docs/core/serialization">Serializer groups</a>\ncan be a good solution to fix this issue.</p>\n<h4 id="force-eager"><a href="#force-eager" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Force eager</h4>\n<p>As mentioned above, by default we force eager loading for all relations. This behaviour can be modified with the\nconfiguration in order to apply it only on join relations having the <code>EAGER</code> fetch mode:</p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code><span class="token comment"># app/config/config.yaml</span>\n<span class="token key atrule">api_platform</span><span class="token punctuation">:</span>\n    <span class="token key atrule">eager_loading</span><span class="token punctuation">:</span>\n        <span class="token key atrule">force_eager</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n</code></pre>\n      </div>\n<h4 id="override-at-resource-and-operation-level"><a href="#override-at-resource-and-operation-level" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Override at resource and operation level</h4>\n<p>When eager loading is enabled, whatever the status of the <code>force_eager</code> parameter, you can easily override it directly\nfrom the configuration of each resource. You can do this at the resource level, at the operations level, or both:</p>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code><span class="token delimiter important">&lt;?php</span>\n<span class="token comment">// src/AppBundle/Entity/Address.php</span>\n\n<span class="token keyword">namespace</span> <span class="token package">AppBundle<span class="token punctuation">\\</span>Entity</span><span class="token punctuation">;</span>\n\n<span class="token keyword">use</span> <span class="token package">ApiPlatform<span class="token punctuation">\\</span>Core<span class="token punctuation">\\</span>Annotation<span class="token punctuation">\\</span>ApiResource</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">Doctrine<span class="token punctuation">\\</span>ORM<span class="token punctuation">\\</span>Mapping</span> <span class="token keyword">as</span> <span class="token constant">ORM</span><span class="token punctuation">;</span>\n\n<span class="token comment">/**\n * @ApiResource\n * @ORM\\Entity\n */</span>\n<span class="token keyword">class</span> <span class="token class-name">Address</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code><span class="token delimiter important">&lt;?php</span>\n<span class="token comment">// src/AppBundle/Entity/User.php</span>\n\n<span class="token keyword">namespace</span> <span class="token package">AppBundle<span class="token punctuation">\\</span>Entity</span><span class="token punctuation">;</span>\n\n<span class="token keyword">use</span> <span class="token package">ApiPlatform<span class="token punctuation">\\</span>Core<span class="token punctuation">\\</span>Annotation<span class="token punctuation">\\</span>ApiResource</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">Doctrine<span class="token punctuation">\\</span>ORM<span class="token punctuation">\\</span>Mapping</span> <span class="token keyword">as</span> <span class="token constant">ORM</span><span class="token punctuation">;</span>\n\n<span class="token comment">/**\n * @ApiResource(attributes={"force_eager"=false})\n * @ORM\\Entity\n */</span>\n<span class="token keyword">class</span> <span class="token class-name">User</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">/**\n     * @var Address\n     *\n     * @ORM\\ManyToOne(targetEntity="Address", fetch="EAGER")\n     */</span>\n    <span class="token keyword">public</span> <span class="token variable">$address</span><span class="token punctuation">;</span>\n\n    <span class="token comment">/**\n     * @var Group[]\n     *\n     * @ORM\\ManyToMany(targetEntity="Group", inversedBy="users")\n     * @ORM\\JoinTable(name="users_groups")\n     */</span>\n    <span class="token keyword">public</span> <span class="token variable">$groups</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code><span class="token delimiter important">&lt;?php</span>\n<span class="token comment">// src/AppBundle/Entity/Group.php</span>\n\n<span class="token keyword">namespace</span> <span class="token package">AppBundle<span class="token punctuation">\\</span>Entity</span><span class="token punctuation">;</span>\n\n<span class="token keyword">use</span> <span class="token package">ApiPlatform<span class="token punctuation">\\</span>Core<span class="token punctuation">\\</span>Annotation<span class="token punctuation">\\</span>ApiResource</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">Doctrine<span class="token punctuation">\\</span>ORM<span class="token punctuation">\\</span>Mapping</span> <span class="token keyword">as</span> <span class="token constant">ORM</span><span class="token punctuation">;</span>\n\n<span class="token comment">/**\n * @ApiResource(\n *     attributes={"force_eager"=false},\n *     itemOperations={\n *         "get"={"method"="GET", "force_eager"=true},\n *         "post"={"method"="POST"}\n *     },\n *     collectionOperations={\n *         "get"={"method"="GET", "force_eager"=true},\n *         "post"={"method"="POST"}\n *     }\n * )\n * @ORM\\Entity\n */</span>\n<span class="token keyword">class</span> <span class="token class-name">Group</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">/**\n     * @var User[]\n     *\n     * @ManyToMany(targetEntity="User", mappedBy="groups")\n     */</span>\n    <span class="token keyword">public</span> <span class="token variable">$users</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Be careful, the operation level is higher priority than the resource level but both are higher priority than the global\nconfiguration.</p>\n<h4 id="disable-eager-loading"><a href="#disable-eager-loading" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Disable eager loading</h4>\n<p>If for any reason you don\'t want the eager loading feature, you can turn it off in the configuration:</p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code><span class="token comment"># app/config/config.yaml</span>\n<span class="token key atrule">api_platform</span><span class="token punctuation">:</span>\n    <span class="token key atrule">eager_loading</span><span class="token punctuation">:</span>\n        <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n</code></pre>\n      </div>\n<p>The whole configuration seen before will no longer work and Doctrine will recover its default behavior.</p>'},navDoc:{edges:[{node:{title:"The Distribution",path:"distribution",items:[{id:"index",title:"Creating a Fully Featured API in 5 Minutes",anchors:null},{id:"testing",title:"Testing and Specifying the API",anchors:null}]}},{node:{title:"The API Component",path:"core",items:[{id:"index",title:"Introduction",anchors:null},{id:"getting-started",title:"Getting Started",anchors:[{id:"installing-api-platform-core",title:"Installing API Platform Core"},{id:"before-reading-this-documentation",title:"Before Reading this Documentation"},{id:"mapping-the-entities",title:"Mapping the Entities"}]},{id:"configuration",title:"Configuration",anchors:null},{id:"operations",title:"Operations",anchors:[{id:"enabling-and-disabling-operations",title:"Enabling and Disabling Operations"},{id:"configuring-operations",title:"Configuring Operations"},{id:"subresources",title:"Subresources"},{id:"creating-custom-operations-and-controllers",title:"Creating Custom Operations and Controllers"}]},{id:"default-order",title:"Overriding Default Order",anchors:null},{id:"filters",title:"Filters",anchors:[{id:"doctrine-orm-filters",title:"Doctrine ORM Filters"},{id:"serializer-filters",title:"Serializer Filters"},{id:"creating-custom-filters",title:"Creating Custom Filters"}]},{id:"serialization",title:"The Serialization Process",anchors:[{id:"overall-process",title:"Overall Process"},{id:"available-serializers",title:"Available Serializers"},{id:"the-serialization-context-groups-and-relations",title:"The Serialization Context, Groups and Relations"},{id:"embedding-relations",title:"Using Different Serialization Groups per Operation"},{id:"embedding-relations",title:"Embedding Relations"},{id:"changing-the-serialization-context-dynamically",title:"Changing the Serialization Context Dynamically"},{id:"name-conversion",title:"Name Conversion"},{id:"entity-identifier-case",title:"Entity Identifier Case"},{id:"writable-entity-identifier",title:"Writable Entity Identifier"},{id:"embedding-the-json-ld-context",title:"Embedding the JSON-LD Context"},{id:"decorating-a-serializer-and-add-extra-data",title:"Decorating a Serializer and Add Extra Data"}]},{id:"content-negotiation",title:"Content Negotiation",anchors:[{id:"enabling-several-formats",title:"Enabling Several Formats"},{id:"registering-a-custom-serializer",title:"Registering a Custom Serializer"},{id:"creating-a-responder",title:"Creating a Responder"},{id:"writing-a-custom-normalizer",title:"Writing a Custom Normalizer"}]},{id:"validation",title:"Validation",anchors:[{id:"using-validation-groups",title:"Using Validation Groups"},{id:"dynamic-validation-groups",title:"Dynamic Validation Groups"}]},{id:"pagination",title:"Pagination",anchors:[{id:"disabling-the-pagination",title:"Disabling the Pagination"},{id:"changing-the-number-of-items-per-page",title:"Changing the Number of Items per Page"}]},{id:"events",title:"The Event System",anchors:null},{id:"data-providers",title:"Data Providers",anchors:[{id:"creating-a-custom-data-provider",title:"Custom Collection Data Provider"},{id:"returning-a-paged-collection",title:"Custom Item Data Provider"}]},{id:"extensions",title:"Extensions",anchors:[{id:"custom-extension",title:"Custom Extension"},{id:"example",title:"Filter upon the current user"}]},{id:"jwt",title:"JWT Authentification",anchors:[{id:"installing-lexikjwtauthenticationnundle",title:"Installing LexikJWTAuthenticationBundle"},{id:"documenting-the-authentication-mechanism-with-swagger-open-api",title:"Documenting the Authentication Mechanism with Swagger/Open API"},{id:"testing-with-behat",title:"Testing with Behat"}]},{id:"security",title:"Security",anchors:null},{id:"swagger",title:"Swagger Support",anchors:[{id:"overriding-the-swagger-documentation",title:"Overriding the Swagger documentation"},{id:"using-the-swagger-context",title:"Using the Swagger Context"}]},{id:"performance",title:"Performance",anchors:[{id:"enabling-the-builtin-http-cache-invalidation-system",title:"Enabling the Builtin HTTP Cache Invalidation System"},{id:"enabling-the-metadata-cache",title:"Enabling the Metadata Cache"},{id:"using-ppm-php-pm",title:"Using PPM (PHP-PM)"},{id:"doctrine-queries-and-indexes",title:"Doctrine Queries and Indexes"}]},{id:"operation-path-naming",title:"Operation Path Naming",anchors:[{id:"configuration",title:"Configuration"},{id:"create-a-custom-operation-path-resolver",title:"Create a Custom Operation Path Naming"}]},{id:"form-data",title:'Accept "application/x-www-form-urlencoded" Form Data',anchors:null},{id:"external-vocabularies",title:"Using External Vocabularies",anchors:null},{id:"extending-jsonld-context",title:"Extending the JSON-LD context",anchors:null},{id:"fosuser-bundle",title:"FOSUserBundle Integration",anchors:[{id:"installing-the-bundle",title:"Installing the Bundle"},{id:"enabling-the-bridge",title:"Enabling the Bridge"},{id:"creating-a-user-entity-with-serialization-groups",title:'Creating a "User" Entity with Serialization Groups'}]},{id:"nelmio-api-doc",title:"NelmioApiDocBundle integration",anchors:null},{id:"angularjs-integration",title:"AngularJS Integration",anchors:[{id:"restangular",title:"Restangular"},{id:"ng-admin",title:"ng-admin"}]}]}},{node:{title:"The Schema Generator Component",path:"schema-generator",items:[{id:"index",title:"Introduction",anchors:null},{id:"getting-started",title:"Getting Started",anchors:null},{id:"configuration",title:"Configuration",anchors:null}]}},{node:{title:"The Admin Component",path:"admin",items:[{id:"index",title:"Introduction",anchors:[{id:"features",title:"Features"}]},{id:"getting-started",title:"Getting Started",anchors:[{id:"installation",title:"Installation"},{id:"creating-the-admin",title:"Creating the Admin"},{id:"customizing-the-admin",title:"Customizing the Admin"}]},{id:"authentication-support",title:"Authentication Support",anchors:null},{id:"handling-relations-to-collections",title:"Handling Relations to Collections",anchors:[{id:"using-an-autocomplete-input-for-relations",title:"Using an Autocomplete Input for Relations"}]}]}},{node:{title:"The Client Generator Component",path:"client-generator",items:[{id:"index",title:"Introduction",anchors:[{id:"features",title:"Features"}]},{id:"react",title:"React generator",anchors:null},{id:"vuejs",title:"Vue.js generator",anchors:null},{id:"troubleshooting",title:"Troubleshooting",anchors:null}]}},{node:{title:"Deployment",path:"deployment",items:[{id:"index",title:"Introduction",anchors:null},{id:"heroku",title:"Deploying an API Platform App on Heroku",anchors:null},{id:"docker",title:"Using API Platform with Docker",anchors:[{id:"services",title:"Services"},{id:"installation",title:"Installation"}]}]}},{node:{title:"Extra",path:"extra",items:[{id:"philosophy",title:"The Project's Philosophy",anchors:null},{id:"troubleshooting",title:"Troubleshooting",anchors:null},{id:"contribution-guides",title:"Contribution Guides",anchors:null},{id:"conduct",title:"Contributor Code Of Conduct",anchors:null}]}}]}},pathContext:{path:"docs/core/performance",current:{path:"docs/core/performance",title:"The API Component - Performance"},prev:{path:"docs/core/swagger",title:"Swagger Support",rootPath:"The API Component"},next:{path:"docs/core/operation-path-naming",title:"Operation Path Naming",rootPath:"The API Component"}}}}});
//# sourceMappingURL=path---docs-core-performance-591dca2bb02eebc2b668.js.map