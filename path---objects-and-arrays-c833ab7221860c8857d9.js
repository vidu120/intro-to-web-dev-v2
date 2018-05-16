webpackJsonp([0xff2bf6166adf],{502:function(n,a){n.exports={data:{markdownRemark:{html:'<p>So far we\'ve talked about having one variable at a time: one first name, one last name, one price, etc. What if we have a collection of data? It\'d be nice to group together like data. Good news! You can!</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token punctuation">:</span> <span class="token string">"Brian Holt"</span><span class="token punctuation">,</span>\n  city<span class="token punctuation">:</span> <span class="token string">"Seattle"</span><span class="token punctuation">,</span>\n  state<span class="token punctuation">:</span> <span class="token string">"WA"</span><span class="token punctuation">,</span>\n  favoriteFood<span class="token punctuation">:</span> <span class="token string">"🌮"</span><span class="token punctuation">,</span>\n  wantsTacosRightNow<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  numberOfTacosWanted<span class="token punctuation">:</span> <span class="token number">100</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">[</span><span class="token string">"name"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// same as the line above; definitely prefer using the other one</span></code></pre>\n      </div>\n<p>This is called an object. They\'re extremely useful in JavaScript; they\'re how you\'ll group together like-information so that they can be used together. They contain a bunch of <strong>keys</strong> and <strong>values</strong>. The keys are on the left side of the <code class="language-text">:</code> and represent how you get that piece data of out of the object. <code class="language-text">name</code> is one such key, and the way I get the name of the</p>\n<p>Used in conjunction with functions they\'re very powerful. Take this example:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> person1 <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token punctuation">:</span> <span class="token string">"Brian"</span><span class="token punctuation">,</span>\n  ageRange<span class="token punctuation">:</span> <span class="token string">"25-35"</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> person2 <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token punctuation">:</span> <span class="token string">"Jack"</span><span class="token punctuation">,</span>\n  ageRange<span class="token punctuation">:</span> <span class="token string">"65-75"</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">suggestMusic</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>person<span class="token punctuation">.</span>ageRange <span class="token operator">===</span> <span class="token string">"25-35"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"We think you\'ll like Daft Punk your crazy millenial."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>person<span class="token punctuation">.</span>ageRange <span class="token operator">===</span> <span class="token string">"65-75"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>\n      <span class="token string">"You\'re obviously going to like Johnny Cash. He walks the line."</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>\n      <span class="token string">"Uh, maybe try David Bowie? Everyone likes David Bowie, right?"</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">suggestMusic</span><span class="token punctuation">(</span>person1<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">suggestMusic</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Now we\'re able to pass all this information as one package which makes it easy to keep track of since we\'re just passing one variable. You\'ll see this become even more useful as we start integrating with servers and APIs.</p>\n<p>Objects can even have their functions! Let\'s see that.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> dog <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token punctuation">:</span> <span class="token string">"dog"</span><span class="token punctuation">,</span>\n  <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"woof woof"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\ndog<span class="token punctuation">.</span><span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Objects can as well have nested objects inside of them.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> me <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    first<span class="token punctuation">:</span> <span class="token string">"Brian"</span><span class="token punctuation">,</span>\n    last<span class="token punctuation">:</span> <span class="token string">"Holt"</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  location<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    city<span class="token punctuation">:</span> <span class="token string">"Seattle"</span><span class="token punctuation">,</span>\n    state<span class="token punctuation">:</span> <span class="token string">"WA"</span><span class="token punctuation">,</span>\n    country<span class="token punctuation">:</span> <span class="token string">"USA"</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>me<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h2 id="context"><a href="#context" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Context</h2>\n<p>Using the above object, wouldn\'t it be nice if we could use a function to nicely print where that person was from?</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> me <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    first<span class="token punctuation">:</span> <span class="token string">"Brian"</span><span class="token punctuation">,</span>\n    last<span class="token punctuation">:</span> <span class="token string">"Holt"</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  location<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    streetNumber<span class="token punctuation">:</span> <span class="token number">500</span><span class="token punctuation">,</span>\n    street<span class="token punctuation">:</span> <span class="token string">"Fakestreet"</span><span class="token punctuation">,</span>\n    city<span class="token punctuation">:</span> <span class="token string">"Seattle"</span><span class="token punctuation">,</span>\n    state<span class="token punctuation">:</span> <span class="token string">"WA"</span><span class="token punctuation">,</span>\n    zipCode<span class="token punctuation">:</span> <span class="token number">55555</span><span class="token punctuation">,</span>\n    country<span class="token punctuation">:</span> <span class="token string">"USA"</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">getAddress</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">.</span>first<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">.</span>last<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\n</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>location<span class="token punctuation">.</span>streetNumber<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>location<span class="token punctuation">.</span>street<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\n</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>location<span class="token punctuation">.</span>city<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>location<span class="token punctuation">.</span>state<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>location<span class="token punctuation">.</span>zipCode<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\n</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>location<span class="token punctuation">.</span>country<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>me<span class="token punctuation">.</span><span class="token function">getAddress</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>This is our first time seeing the weird <code class="language-text">this</code> keyword. This is a strange, complicated, and difficult concept in JavaScript known as context and trips up all sorts of people, new and old to the language. If you decide to pursue a career as a developer, interviewers will often ask questions about context in JavaScript. It\'s worth investment to understand how it works.</p>\n<p>In the simplest form, anywhere you are in JavaScript you have a context you are in. You can reference that context by using <code class="language-text">this</code>. If I just reference <code class="language-text">this</code> from the outtermost layer, it\'ll be the global object, which in the browser is something called <code class="language-text">window</code>. <code class="language-text">window</code> already has a bunch of stuff on it. For example:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">===</span> window<span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>scrollY<span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>scrollY<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>As you can see from the first line, you can see that in this context, window is the <code class="language-text">this</code> at that time. However, in the example above when we\'re doing the address, the <code class="language-text">this</code> is the object since when I <strong>call the function</strong>, it\'s created inside of an object. That object then becomes <code class="language-text">this</code> when <code class="language-text">getAddress</code> is called. As soon as the function completes, the context is destroyed and the context goes back to being what it was before, in this case <code class="language-text">window</code>.</p>\n<p>A good rule of thumb (that is unfortunately not always true) is that if you\'re inside an object of some sort, the <code class="language-text">this</code> will be that object. If not, it\'ll be the global object, <code class="language-text">window</code>. There are crazy exceptions to this and you can even manipulate it yourself. For now, operate with that definition. It\'s a deep-and-dark rabbit hole to go down so let\'s continue and you can take <a href="">Kyle Simpson\'s course</a> later where he goes in depth on it.</p>\n<h2 id="arrays"><a href="#arrays" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Arrays</h2>\n<p>Objects are un-ordered collections of datas using keys and values. Arrays, in contrast, are <strong>ordered collections of data</strong>. If you put something in an array, it has an order. For example, you might a list of the days of the week.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> daysOfTheWeek <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token string">"Monday"</span><span class="token punctuation">,</span>\n  <span class="token string">"Tuesday"</span><span class="token punctuation">,</span>\n  <span class="token string">"Wednesday"</span><span class="token punctuation">,</span>\n  <span class="token string">"Thursday"</span><span class="token punctuation">,</span>\n  <span class="token string">"Friday"</span><span class="token punctuation">,</span>\n  <span class="token string">"Saturday"</span><span class="token punctuation">,</span>\n  <span class="token string">"Sunday"</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>daysOfTheWeek<span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>daysOfTheWeek<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>daysOfTheWeek<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>daysOfTheWeek<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>You first can see how we declare an array, using <code class="language-text">[ ]</code>. Inside of an array, you can store anything you can store in a variable. You can have an array of numbers, an arry of strings, an array of objects, an array of arrays, an array of arrays of arrays, etc.</p>\n<p>You can also see above how we access individual elements in an array: we use square brackets again and then we reference the number that we want to access. Again, remember, the numbering starts at 0. So the first element is index 0.</p>\n<p>Arrays also have many methods (another word for functions that live on an object) and properties (another word for key/value pairs) that live on them. Let\'s see some of those:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> primeNumbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>primeNumbers<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>primeNumbers<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">" | "</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p><code class="language-text">primeNumbers.length</code> gives you back an number that is how long the array is. In this case there are eight elements in the array so it gives us back <code class="language-text">8</code>. <code class="language-text">primeNumbers.join(&quot; | &quot;))</code> takes your whole array and makes it into one string. THe <code class="language-text">&quot; | &quot;</code> paramenter I\'m passing is what I want put between each element, so you end up with the string <code class="language-text">&quot;1 | 2 | 3 | 5 | 7 | 11 | 13 | 17&quot;</code>.</p>\n<p>So what if I want to add an element to the array after I\'ve created. Use <code class="language-text">push</code>!</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> courses <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span> teacher<span class="token punctuation">:</span> <span class="token string">"Kyle Simpson"</span><span class="token punctuation">,</span> course<span class="token punctuation">:</span> <span class="token string">"JS Function Lite"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> teacher<span class="token punctuation">:</span> <span class="token string">"Sarah Drasner"</span><span class="token punctuation">,</span> course<span class="token punctuation">:</span> <span class="token string">"Intro to Vue"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> teacher<span class="token punctuation">:</span> <span class="token string">"Brian Holt"</span><span class="token punctuation">,</span> course<span class="token punctuation">:</span> <span class="token string">"Complete Intro to React v3"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> teacher<span class="token punctuation">:</span> <span class="token string">"Steve Kinney"</span><span class="token punctuation">,</span> course<span class="token punctuation">:</span> <span class="token string">"State Management"</span> <span class="token punctuation">}</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\ncourses<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> teacher<span class="token punctuation">:</span> <span class="token string">"Sean Larkinn"</span><span class="token punctuation">,</span> course<span class="token punctuation">:</span> <span class="token string">"Webpack"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>courses<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\ncourses<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span> teacher<span class="token punctuation">:</span> <span class="token string">"Brian Holt"</span><span class="token punctuation">,</span> course<span class="token punctuation">:</span> <span class="token string">"Complete Intro to React v4"</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>courses<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>The first thing we do is add an element to the end using the push function that arrays have. It "pushes" the element on the end.</p>\n<p>Below that, we\'re overrinding index 2 with a new course. This will throw away what was there before and set it to be what we\'ve set it to be.</p>\n<p>Okay, now, given that, what if we wanted to <code class="language-text">console.log</code> everything in the array? You already have all the tools to do that? Let\'s see to do it.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> cities <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token string">"Seattle"</span><span class="token punctuation">,</span>\n  <span class="token string">"San Francisco"</span><span class="token punctuation">,</span>\n  <span class="token string">"Salt Lake City"</span><span class="token punctuation">,</span>\n  <span class="token string">"Amsterdam"</span><span class="token punctuation">,</span>\n  <span class="token string">"Hong Kong"</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token comment">// method 1</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> cities<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cities<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// method 2</span>\ncities<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>city<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>city<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>The first way, using a for loop, we\'re using that <code class="language-text">i</code> control variable which gets incremented each loop. We use that <code class="language-text">i</code> to access each item in the array on each iteration of the loop. We have the loop stop when <code class="language-text">i</code> gets equal to the <code class="language-text">length</code> of cities. Very useful pattern. You\'ll see it a lot.</p>\n<p>The second way is using a function that arrays have called <code class="language-text">forEach</code>. This <code class="language-text">forEach</code> method takes in a function and that function will be called once on each item of the array. It will pass that item into the function, which is what <code class="language-text">city</code> is in this situation. Both are useful patterns to know. You\'ll use both frequently. While you\'re getting started, just use the one you feel comfortable with. They have different things that make them preferable in different situations but usually you can use either. Method 2 may be a bit more advance but I don\'t think you should be scared of it.</p>',frontmatter:{path:"/objects-and-arrays",title:"Objects and Arrays",order:13}},allMarkdownRemark:{edges:[{node:{frontmatter:{order:0,path:"/intro",title:"Introduction to the Course"}}},{node:{frontmatter:{order:1,path:"/overview",title:"Overview of What You'll Be Learning In This Course"}}},{node:{frontmatter:{order:2,path:"/tools",title:"Tools"}}},{node:{frontmatter:{order:3,path:"/basic-html",title:"Basic HTML"}}},{node:{frontmatter:{order:4,path:"/html-next-steps",title:"HTML Next Steps"}}},{node:{frontmatter:{order:5,path:"/meta-html",title:"Meta HTML"}}},{node:{frontmatter:{order:6,path:"/basic-css",title:"Basic CSS"}}},{node:{frontmatter:{order:7,path:"/selectors",title:"CSS Selectors and the Cascade"}}},{node:{frontmatter:{
order:8,path:"/layout-css",title:"Layout CSS"}}},{node:{frontmatter:{order:9,path:"/css-patterns",title:"Effective Patterns for Writing CSS"}}},{node:{frontmatter:{order:10,path:"/project-html-css",title:"Project: HTML & CSS"}}},{node:{frontmatter:{order:11,path:"/programming-fundamentals",title:"Programming Fundamentals"}}},{node:{frontmatter:{order:12,path:"/functions-and-scope",title:"Functions and Scope"}}},{node:{frontmatter:{order:13,path:"/objects-and-arrays",title:"Objects and Arrays"}}},{node:{frontmatter:{order:14,path:"/dom",title:"The DOM"}}},{node:{frontmatter:{order:15,path:"/js-project",title:"JavaScript, HTML, and CSS Project"}}},{node:{frontmatter:{order:16,path:"/ajax",title:"AJAX"}}},{node:{frontmatter:{order:17,path:"/libraries",title:"Integrating with Other People's Libraries"}}},{node:{frontmatter:{order:18,path:"/git-and-bash",title:"Git and Bash"}}},{node:{frontmatter:{order:19,path:"/node",title:"Node.js"}}},{node:{frontmatter:{order:20,path:"/deploying",title:"Deploying Your App"}}},{node:{frontmatter:{order:21,path:"/final-thoughts",title:"Final Thoughts"}}}]}},pathContext:{}}}});
//# sourceMappingURL=path---objects-and-arrays-c833ab7221860c8857d9.js.map