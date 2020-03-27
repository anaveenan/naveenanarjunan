
var documents = [{
    "id": 0,
    "url": "https://anaveenan.github.io/404.html",
    "title": "",
    "body": " 404 Page not found :(  The requested page could not be found. "
    }, {
    "id": 1,
    "url": "https://anaveenan.github.io/about/",
    "title": "About Me",
    "body": "This is where you put the contents of your About page. Like all your pages, it’s in Markdown format. This website is powered by fastpages 1.       a blogging platform that natively supports Jupyter notebooks in addition to other formats.  &#8617;    "
    }, {
    "id": 2,
    "url": "https://anaveenan.github.io/categories/",
    "title": "Tags",
    "body": "Contents: {% if site. categories. size &gt; 0 %} {% for category in site. categories %} {% capture category_name %}{{ category | first }}{% endcapture %} {{ category_name }}{% endfor %}{% endif %} {% for category in site. categories %}  {% capture category_name %}{{ category | first }}{% endcapture %} &lt;h3 id = {{ category_name }} &gt;&lt;i class= fas fa-tags category-tags-icon &gt;&lt;/i&gt;&lt;/i&gt; {{ category_name }}&lt;/h3&gt;&lt;a name= {{ category_name | slugize }} &gt;&lt;/a&gt;{% for post in site. categories[category_name] %}{%- assign date_format = site. minima. date_format | default:  %b %-d, %Y  -%}&lt;article class= archive-item &gt; &lt;p class= post-meta post-meta-title &gt;&lt;a class= page-meta  href= {{ site. baseurl }}{{ post. url }} &gt;{{post. title}}&lt;/a&gt; • {{ post. date | date: date_format }}&lt;/p&gt;&lt;/article&gt;{% endfor %} {% endfor %}"
    }, {
    "id": 3,
    "url": "https://anaveenan.github.io/images/copied_from_nb/",
    "title": "",
    "body": "WarningDo not manually save images into this folder. This is used by GitHub Actions to automatically copy images.  Any images you save into this folder could be deleted at build time. "
    }, {
    "id": 4,
    "url": "https://anaveenan.github.io/2020/03/26/wip.html",
    "title": "Title",
    "body": "2020/03/26 -                 import altair as altimport numpy as npimport pandas as pdfrom vega_datasets import datasource = data. cars()source. head()base = (alt . Chart(source) . mark_point() . encode(x=alt. X(&#39;Miles_per_Gallon&#39;),    y=alt. Y(&#39;Acceleration&#39;)))line=base. transform_regression(&#39;Miles_per_Gallon&#39;,&#39;Acceleration&#39;). mark_line()loess=base. transform_loess(&#39;Miles_per_Gallon&#39;,&#39;Acceleration&#39;). mark_line(color=&#39;red&#39;)poly=base. transform_regression(&#39;Miles_per_Gallon&#39;,&#39;Acceleration&#39;,method=&quot;poly&quot;). mark_line(color=&#39;green&#39;)test=base. mark_text()base+line+loess+polydef get_decile(arr):  perc=np. array([0,10,20,30,40,50,60,70,80,90,100])  out=[round(np. percentile(arr,i),2) for i in perc]  return outdf=(source . groupby([&#39;Origin&#39;]) . agg(metrics=(&#39;Acceleration&#39;,get_decile))[&#39;metrics&#39;] . apply(pd. Series) . rename(columns=lambda x:str(x*10)+&quot;%&quot;) . reset_index() . melt(id_vars=&#39;Origin&#39;))df. head()df_new=(source . assign(Miles_Per_Gallon=lambda x:np. round(x[&#39;Miles_per_Gallon&#39;],0)) . groupby([&#39;Miles_per_Gallon&#39;]) . agg(metrics=(&#39;Acceleration&#39;,get_decile))[&#39;metrics&#39;] . apply(pd. Series) . rename(columns=lambda x:str(x*10)+&quot;%&quot;) . reset_index() . melt(id_vars=&#39;Miles_per_Gallon&#39;))df_new. head()(alt . Chart(df_new) . encode(x=alt. X(&#39;Miles_per_Gallon&#39;)    ,y=alt. Y(&#39;value&#39;)    ,color=alt. Color(&#39;variable:N&#39;)) . mark_line()). properties(width=500)(alt . Chart(df) . encode(x=alt. X(&#39;Origin&#39;)    ,y=alt. Y(&#39;value&#39;)    ,color=alt. Color(&#39;variable:N&#39;)) . mark_line()). properties(width=500)# def get_decile(arr):#   perc=np. array([0,10,20,30,40,50,60,70,80,90,100])#   out=[round(np. percentile(arr,i),2) for i in perc]#   #a=np. percentile(arr,100)#   return out# from plotnine import *# from mizani. formatters import percent_format,custom_format# from plotnine import *# from mizani. formatters import percent_format,custom_format# def percentile_plot(df_data,metrics,nice_name):#   percentiles=df_data \#   . dropna(subset=[metrics])\#   . groupby([&quot;variant&quot;]). agg({metrics:get_decile})[metrics]. apply(pd. Series)\#   . rename(columns= lambda x: str(x*10)+&quot;%&quot; ). reset_index()\#   . drop([&quot;0%&quot;,&quot;100%&quot;],1)\#   . merge(df_data. dropna(subset=[metrics]). groupby([&quot;variant&quot;]). agg({metrics:np. mean}). reset_index()#      ,on=&#39;variant&#39;)\#   . rename(columns={metrics:&quot;average&quot;})#   new_percentile=percentiles. set_index(&quot;variant&quot;)\#   . unstack(). reset_index()\#   . rename(columns={&quot;level_0&quot;:&#39;Percentile&#39;,0:nice_name})  #   #print(percentiles. head())#   dollar_formatter = custom_format(&#39;${:. 2f}&#39;)#   return (ggplot(data=new_percentile)#   + aes(x=&#39;variant&#39;,y=nice_name,color=&#39;Percentile&#39;, group=&#39;Percentile&#39;)#   + geom_point() #   + geom_line()#   + xlab(&quot;variant&quot;)#   + geom_hline(yintercept=0,linetype=&#39;--&#39;,color=&#39;r&#39;)#   + ggtitle(&quot;Transactional {} distribution by offer type&quot;. format(nice_name))#   + scale_y_continuous(labels=dollar_formatter)#   )# #percentile_plot(df_data,metrics=&#39;ogp_usd&#39;,nice_name=&#39;oGP$&#39;)    "
    }, {
    "id": 5,
    "url": "https://anaveenan.github.io/altair/python/2020/02/22/confidence-interval-plot.html",
    "title": "Confidence Interval Plot Python",
    "body": "2020/02/22 -           About This blog post details how to create confidence interval plot in python using Altair Visualization package. Altair is a declarative statistical visualization library based on vega and vega-lite. This is one my favourite visualization package in pythons. More details can be found here Lets load the package and get data from cars data set.       import altair as altimport numpy as npimport pandas as pdfrom vega_datasets import datasource = data. cars()source. head()           Name   Miles_per_Gallon   Cylinders   Displacement   Horsepower   Weight_in_lbs   Acceleration   Year   Origin         0   chevrolet chevelle malibu   18. 0   8   307. 0   130. 0   3504   12. 0   1970-01-01   USA       1   buick skylark 320   15. 0   8   350. 0   165. 0   3693   11. 5   1970-01-01   USA       2   plymouth satellite   18. 0   8   318. 0   150. 0   3436   11. 0   1970-01-01   USA       3   amc rebel sst   16. 0   8   304. 0   150. 0   3433   12. 0   1970-01-01   USA       4   ford torino   17. 0   8   302. 0   140. 0   3449   10. 5   1970-01-01   USA     Create a plot showing how mile per gallon change by year : Altair has built in capabilities to create this visualization Lets create a base line cart showing the average mile per gallon per year Create a confidence interval band chart using the mark_errorband() Layer the line and CI band chart to create the final visualization      line = (alt    . Chart(source). mark_line(color=&#39;blue&#39;)    . encode(x=&#39;Year&#39;,        y=&#39;mean(Miles_per_Gallon)&#39;))band = (alt    . Chart(source)    . mark_errorband(extent=&#39;ci&#39;,color=&#39;blue&#39;)    . encode(x=&#39;Year&#39;,        y=alt. Y(&#39;Miles_per_Gallon&#39;, title=&#39;Miles/Gallon&#39;)))(band + line). properties(title=&#39;Confidence Interval Plot of miles per gallon&#39;)    Lets say if you want to under how mileage varies by origin. This can done by simply encoding color in the plot       line = (alt    . Chart(source). mark_line(color=&#39;blue&#39;)    . encode(x=&#39;Year&#39;,        y=&#39;mean(Miles_per_Gallon)&#39;,        color=&#39;Origin&#39;))band = (alt    . Chart(source)    . mark_errorband(extent=&#39;ci&#39;,color=&#39;blue&#39;)    . encode(x=&#39;Year&#39;,        y=alt. Y(&#39;Miles_per_Gallon&#39;, title=&#39;Miles/Gallon&#39;),        color=&#39;Origin&#39;))(band + line). properties(title=&#39;Confidence Interval of miles per gallon by country&#39;)    Create confidence interval plot from grouped data : Most of situation in real world you have large a dataset and still need to plot confidence interval plots. In this scenario it is better to pre compute the confidence interval based on mean and margin of error. Lets create a pandas dataframe with required fields as show below :       df=(source . groupby([&#39;Year&#39;]) . agg(avg_mpg=(&#39;Miles_per_Gallon&#39;,&#39;mean&#39;),   std_mpg=(&#39;Miles_per_Gallon&#39;,&#39;std&#39;),   n=(&#39;Miles_per_Gallon&#39;,&#39;count&#39;)) . assign(ul=lambda x:x[&#39;avg_mpg&#39;]+1. 96*x[&#39;std_mpg&#39;]/np. sqrt(x[&#39;n&#39;]),    ll=lambda x:x[&#39;avg_mpg&#39;]-1. 96*x[&#39;std_mpg&#39;]/np. sqrt(x[&#39;n&#39;])) . reset_index())df. head()           Year   avg_mpg   std_mpg   n   ul   ll         0   1970-01-01   17. 689655   5. 339231   29   19. 632937   15. 746373       1   1971-01-01   21. 250000   6. 591942   28   23. 691690   18. 808310       2   1972-01-01   18. 714286   5. 435529   28   20. 727634   16. 700938       3   1973-01-01   17. 100000   4. 700245   40   18. 556621   15. 643379       4   1974-01-01   22. 703704   6. 420010   27   25. 125345   20. 282062     Few lines of code below create the custom confidence interval plot required       line = (alt    . Chart(df). mark_line(color=&#39;blue&#39;)    . encode(x=&#39;Year&#39;,        y=&#39;avg_mpg&#39;))band = (alt    . Chart(df)    . mark_area(opacity=0. 5,color=&#39;blue&#39;)    . encode(x=&#39;Year&#39;,        y=alt. Y(&#39;ll&#39;, title=&#39;Miles/Gallon&#39;),        y2=alt. Y2(&#39;ul&#39;, title=&#39;Miles/Gallon&#39;)))(band + line). properties(title=&#39;Confidence Interval of miles per gallon by country(Custom)&#39;)    Conclusion : Confidence interval plot is one the most important tool in a data scientist tool kit to understand uncertainty of the metrics. Altair provides excellent visualization capabilities to make this plot few line of python code.       source. head()           Name   Miles_per_Gallon   Cylinders   Displacement   Horsepower   Weight_in_lbs   Acceleration   Year   Origin         0   chevrolet chevelle malibu   18. 0   8   307. 0   130. 0   3504   12. 0   1970-01-01   USA       1   buick skylark 320   15. 0   8   350. 0   165. 0   3693   11. 5   1970-01-01   USA       2   plymouth satellite   18. 0   8   318. 0   150. 0   3436   11. 0   1970-01-01   USA       3   amc rebel sst   16. 0   8   304. 0   150. 0   3433   12. 0   1970-01-01   USA       4   ford torino   17. 0   8   302. 0   140. 0   3449   10. 5   1970-01-01   USA           base = (alt . Chart(source) . mark_point() . encode(x=alt. X(&#39;Miles_per_Gallon&#39;),    y=alt. Y(&#39;Acceleration&#39;)))line=base. transform_regression(&#39;Miles_per_Gallon&#39;,&#39;Acceleration&#39;). mark_line()loess=base. transform_loess(&#39;Miles_per_Gallon&#39;,&#39;Acceleration&#39;). mark_line(color=&#39;red&#39;)poly=base. transform_regression(&#39;Miles_per_Gallon&#39;,&#39;Acceleration&#39;,method=&quot;poly&quot;). mark_line(color=&#39;green&#39;)test=base. mark_text()base+line+loess+poly          def get_decile(arr):  perc=np. array([0,10,20,30,40,50,60,70,80,90,100])  out=[round(np. percentile(arr,i),2) for i in perc]  return out          df=(source . groupby([&#39;Origin&#39;]) . agg(metrics=(&#39;Acceleration&#39;,get_decile))[&#39;metrics&#39;] . apply(pd. Series) . rename(columns=lambda x:str(x*10)+&quot;%&quot;) . reset_index() . melt(id_vars=&#39;Origin&#39;))df. head()           Origin   variable   value         0   Europe   0%   12. 20       1   Japan   0%   11. 40       2   USA   0%   8. 00       3   Europe   10%   14. 00       4   Japan   10%   13. 74           df_new=(source . assign(Miles_Per_Gallon=lambda x:np. round(x[&#39;Miles_per_Gallon&#39;],0)) . groupby([&#39;Miles_per_Gallon&#39;]) . agg(metrics=(&#39;Acceleration&#39;,get_decile))[&#39;metrics&#39;] . apply(pd. Series) . rename(columns=lambda x:str(x*10)+&quot;%&quot;) . reset_index() . melt(id_vars=&#39;Miles_per_Gallon&#39;))df_new. head()           Miles_per_Gallon   variable   value         0   9. 0   0%   18. 5       1   10. 0   0%   14. 0       2   11. 0   0%   11. 0       3   12. 0   0%   11. 0       4   13. 0   0%   11. 0           (alt . Chart(df_new) . encode(x=alt. X(&#39;Miles_per_Gallon&#39;)    ,y=alt. Y(&#39;value&#39;)    ,color=alt. Color(&#39;variable:N&#39;)) . mark_line()). properties(width=500)          (alt . Chart(df) . encode(x=alt. X(&#39;Origin&#39;)    ,y=alt. Y(&#39;value&#39;)    ,color=alt. Color(&#39;variable:N&#39;)) . mark_line()). properties(width=500)          # def get_decile(arr):#   perc=np. array([0,10,20,30,40,50,60,70,80,90,100])#   out=[round(np. percentile(arr,i),2) for i in perc]#   #a=np. percentile(arr,100)#   return out# from plotnine import *# from mizani. formatters import percent_format,custom_format# from plotnine import *# from mizani. formatters import percent_format,custom_format# def percentile_plot(df_data,metrics,nice_name):#   percentiles=df_data \#   . dropna(subset=[metrics])\#   . groupby([&quot;variant&quot;]). agg({metrics:get_decile})[metrics]. apply(pd. Series)\#   . rename(columns= lambda x: str(x*10)+&quot;%&quot; ). reset_index()\#   . drop([&quot;0%&quot;,&quot;100%&quot;],1)\#   . merge(df_data. dropna(subset=[metrics]). groupby([&quot;variant&quot;]). agg({metrics:np. mean}). reset_index()#      ,on=&#39;variant&#39;)\#   . rename(columns={metrics:&quot;average&quot;})#   new_percentile=percentiles. set_index(&quot;variant&quot;)\#   . unstack(). reset_index()\#   . rename(columns={&quot;level_0&quot;:&#39;Percentile&#39;,0:nice_name})  #   #print(percentiles. head())#   dollar_formatter = custom_format(&#39;${:. 2f}&#39;)#   return (ggplot(data=new_percentile)#   + aes(x=&#39;variant&#39;,y=nice_name,color=&#39;Percentile&#39;, group=&#39;Percentile&#39;)#   + geom_point() #   + geom_line()#   + xlab(&quot;variant&quot;)#   + geom_hline(yintercept=0,linetype=&#39;--&#39;,color=&#39;r&#39;)#   + ggtitle(&quot;Transactional {} distribution by offer type&quot;. format(nice_name))#   + scale_y_continuous(labels=dollar_formatter)#   )# #percentile_plot(df_data,metrics=&#39;ogp_usd&#39;,nice_name=&#39;oGP$&#39;)    "
    }, {
    "id": 6,
    "url": "https://anaveenan.github.io/altair/python/2020/02/21/CI-Plot.html",
    "title": "Confidence Interval Plot Python",
    "body": "2020/02/21 -           About This blog post details how to create confidence interval plot in python using Altair Visualization package. Altair is a declarative statistical visualization library based on vega and vega-lite. This is one my favourite visualization package in pythons. More details can be found here Lets load the package and get data from cars data set.       import altair as altimport numpy as npimport pandas as pdfrom vega_datasets import datasource = data. cars()source. head()           Name   Miles_per_Gallon   Cylinders   Displacement   Horsepower   Weight_in_lbs   Acceleration   Year   Origin         0   chevrolet chevelle malibu   18. 0   8   307. 0   130. 0   3504   12. 0   1970-01-01   USA       1   buick skylark 320   15. 0   8   350. 0   165. 0   3693   11. 5   1970-01-01   USA       2   plymouth satellite   18. 0   8   318. 0   150. 0   3436   11. 0   1970-01-01   USA       3   amc rebel sst   16. 0   8   304. 0   150. 0   3433   12. 0   1970-01-01   USA       4   ford torino   17. 0   8   302. 0   140. 0   3449   10. 5   1970-01-01   USA     Create a plot showing how mile per gallon change by year : Altair has built in capabilities to create this visualization Lets create a base line cart showing the average mile per gallon per year Create a confidence interval band chart using the mark_errorband() Layer the line and CI band chart to create the final visualization      line = (alt    . Chart(source). mark_line(color=&#39;blue&#39;)    . encode(x=&#39;Year&#39;,        y=&#39;mean(Miles_per_Gallon)&#39;))band = (alt    . Chart(source)    . mark_errorband(extent=&#39;ci&#39;,color=&#39;blue&#39;)    . encode(x=&#39;Year&#39;,        y=alt. Y(&#39;Miles_per_Gallon&#39;, title=&#39;Miles/Gallon&#39;)))(band + line). properties(title=&#39;Confidence Interval Plot of miles per gallon&#39;)    Lets say if you want to under how mileage varies by origin. This can done by simply encoding color in the plot       line = (alt    . Chart(source). mark_line(color=&#39;blue&#39;)    . encode(x=&#39;Year&#39;,        y=&#39;mean(Miles_per_Gallon)&#39;,        color=&#39;Origin&#39;))band = (alt    . Chart(source)    . mark_errorband(extent=&#39;ci&#39;,color=&#39;blue&#39;)    . encode(x=&#39;Year&#39;,        y=alt. Y(&#39;Miles_per_Gallon&#39;, title=&#39;Miles/Gallon&#39;),        color=&#39;Origin&#39;))(band + line). properties(title=&#39;Confidence Interval of miles per gallon by country&#39;)    Create confidence interval plot from grouped data : Most of situation in real world you have large a dataset and still need to plot confidence interval plots. In this scenario it is better to pre compute the confidence interval based on mean and margin of error       df=(source . groupby([&#39;Year&#39;]) . agg(avg_mpg=(&#39;Miles_per_Gallon&#39;,&#39;mean&#39;),   std_mpg=(&#39;Miles_per_Gallon&#39;,&#39;std&#39;),   n=(&#39;Miles_per_Gallon&#39;,&#39;count&#39;)) . assign(ul=lambda x:x[&#39;avg_mpg&#39;]+1. 96*x[&#39;std_mpg&#39;]/np. sqrt(x[&#39;n&#39;]),    ll=lambda x:x[&#39;avg_mpg&#39;]-1. 96*x[&#39;std_mpg&#39;]/np. sqrt(x[&#39;n&#39;])) . reset_index())df. head()           Year   avg_mpg   std_mpg   n   ul   ll         0   1970-01-01   17. 689655   5. 339231   29   19. 632937   15. 746373       1   1971-01-01   21. 250000   6. 591942   28   23. 691690   18. 808310       2   1972-01-01   18. 714286   5. 435529   28   20. 727634   16. 700938       3   1973-01-01   17. 100000   4. 700245   40   18. 556621   15. 643379       4   1974-01-01   22. 703704   6. 420010   27   25. 125345   20. 282062           line = alt. Chart(df). mark_line(color=&#39;blue&#39;). encode(  x=&#39;Year&#39;,  y=&#39;avg_mpg&#39;)band = alt. Chart(df). mark_area(color=&#39;blue&#39;,opacity=0. 4). encode(  x=&#39;Year&#39;,  y=alt. Y(&#39;ll&#39;, title=&#39;Miles/Gallon&#39;),  y2=alt. Y2(&#39;ul&#39;, title=&#39;Miles/Gallon&#39;))band + line          def get_decile(arr):  perc=np. array([0,10,20,30,40,50,60,70,80,90,100])  out=[round(np. percentile(arr,i),2) for i in perc]  #a=np. percentile(arr,100)  return outfrom plotnine import *from mizani. formatters import percent_format,custom_formatfrom plotnine import *from mizani. formatters import percent_format,custom_formatdef percentile_plot(df_data,metrics,nice_name):  percentiles=df_data \  . dropna(subset=[metrics])\  . groupby([&quot;variant&quot;]). agg({metrics:get_decile})[metrics]. apply(pd. Series)\  . rename(columns= lambda x: str(x*10)+&quot;%&quot; ). reset_index()\  . drop([&quot;0%&quot;,&quot;100%&quot;],1)\  . merge(df_data. dropna(subset=[metrics]). groupby([&quot;variant&quot;]). agg({metrics:np. mean}). reset_index()      ,on=&#39;variant&#39;)\  . rename(columns={metrics:&quot;average&quot;})  new_percentile=percentiles. set_index(&quot;variant&quot;)\  . unstack(). reset_index()\  . rename(columns={&quot;level_0&quot;:&#39;Percentile&#39;,0:nice_name})    #print(percentiles. head())  dollar_formatter = custom_format(&#39;${:. 2f}&#39;)  return (ggplot(data=new_percentile)  + aes(x=&#39;variant&#39;,y=nice_name,color=&#39;Percentile&#39;, group=&#39;Percentile&#39;)  + geom_point()   + geom_line()  + xlab(&quot;variant&quot;)  + geom_hline(yintercept=0,linetype=&#39;--&#39;,color=&#39;r&#39;)  + ggtitle(&quot;Transactional {} distribution by offer type&quot;. format(nice_name))  + scale_y_continuous(labels=dollar_formatter)  )#percentile_plot(df_data,metrics=&#39;ogp_usd&#39;,nice_name=&#39;oGP$&#39;)  ---------------------------------------------------------------------------ModuleNotFoundError            Traceback (most recent call last)&lt;ipython-input-6-df40ecdfcb75&gt; in &lt;module&gt;   4   #a=np. percentile(arr,100)   5   return out----&gt; 6 from plotnine import *   7 from mizani. formatters import percent_format,custom_format   8 ModuleNotFoundError: No module named &#39;plotnine&#39;  "
    }, {
    "id": 7,
    "url": "https://anaveenan.github.io/a/b%20testing/python/2020/02/14/power-analyis.html",
    "title": "Using Simulation to Estimate the Power of an A/B experiment",
    "body": "2020/02/14 -           About Power of an experiment measures the ability of the experiment to detect a specific alternate hypothesis. For example, an e-commerce company is trying to increase the time users spend on the website by changing the design of the website. They plan to use the well-known two-sample t-test. Power helps in answering the question: will the t-test be able to detect a difference in mean time spend (if it exists) by rejecting the null hypothesis? Lets state the hypothesis Null Hypothesis H0: New design has no effect on the time users spend on the websiteAlternate Hypothesis Ha: New design impacts the time users spend on the website When an A/B experiment is run to measure the impact of the website redesign, we want to ensure that the experiment has at least 80% power. The following parameters impact the power of the experiment: 1. Sample size(n): Larger the sample size, smaller the standard error becomes; and makes sampling distribution smaller. Increasing the sample size, increases the power of the experiment2. Effect size(𝛿): Difference between the means sampling distribution of null and alternative hypothesis. Smaller the effect size, need more samples to detect an effect at predefined power3. Alpha(𝛼): Significance value is typically set at 0. 05; this is the cut off at which we accept or reject our null hypothesis. Making alpha smaller requires more samples to detect an effect at predefined power4. Beta(β): Power is defined as 1-β Why power analysis is done to determine sample size before running an experiment? Running experiments is expensive and time consuming Increases the chance of finding significant effect Increases the chance of replicating an effect detected in an experiment For example, the time users spend currently on the website is normally distributed with mean 2 minutes and standard deviation 1 minute. The product manager wants to design an experiment to understand if the redesigned website helps in increasing the time spent on the website. The experiment should be able to detect a minimum of 5% change in time spent on the website. For a test like this, an exact solution is available to estimate sample size since sampling distribution is known. Here we will use the simulation method to estimate the sample and validate the same using exact method. The following steps estimate the power of two-sample t-test: Simulate data for the model under null 𝒩(2,1) and alternate hypothesis 𝒩(2+𝛿,1) Perform t-test on the sample and record whether the t-test rejects the null hypothesis Run the simulation multiple number of times and count the number of times the t-test rejects the null hypothesis.  Code to compute power of experiment for a specified sample size, effect size and significance level: : Power of the experiment is 58. 8% with sample size of 1000       import numpy as npimport scipy. stats as st# Initialize delta(minimum lift the product manager expect), control_mean, control_sddelta=0. 05control_mean=2control_sd=1sample_size=1000alpha=0. 05#significance of the experimentn_sim=1000#Total number of samples to simulatenp. random. seed(123)#set seeddef simulate_data(control_mean,control_sd,sample_size,n_sim):  # Simulate the time spend under null hypothesis  control_time_spent = np. random. normal(loc=control_mean, scale=control_sd, size=(sample_size,n_sim))  # Simulate the time spend under alternate hypothesis  treatment_time_spent = np. random. normal(loc=control_mean*(1+delta), scale=control_sd, size=(sample_size,n_sim))  return control_time_spent,treatment_time_spent# Run the t-test and get the p_valuecontrol_time_spent, treatment_time_spent=simulate_data(control_mean,control_sd,sample_size,n_sim)t_stat, p_value = st. ttest_ind(control_time_spent, treatment_time_spent)power=(p_value&lt;0. 05). sum()/n_simprint(&quot;Power of the experiment {:. 1%}&quot;. format(power))#Power of the experiment 58. 8%  Power of the experiment 58. 8%  Code to compute sample size required to reach 80% power for specified effect size and significance level: : Based on simulation methods we need 1560 users to reach power of 80% and this closely matches with sample size estimated using exact method       #increment sample size till required power is reached sample_size=1000np. random. seed(123)while True:  control_time_spent, treatment_time_spent=simulate_data(control_mean,control_sd,sample_size,n_sim)  t_stat, p_value = st. ttest_ind(control_time_spent, treatment_time_spent)  power=(p_value&lt;alpha). sum()/n_sim  if power&gt;. 80:    print(&quot;Minimum sample size required to reach significance {}&quot;. format(sample_size))    break  else:    sample_size+=10#Minimum sample size required to reach significance 1560  Minimum sample size required to reach significance 1560  Code to compute sample size using exact method: :       #Analtyical solution to compute sample sizefrom statsmodels. stats. power import tt_ind_solve_powertreat_mean=control_mean*(1+delta)mean_diff=treat_mean-control_meancohen_d=mean_diff/np. sqrt((control_sd**2+control_sd**2)/2)n = tt_ind_solve_power(effect_size=cohen_d, alpha=alpha, power=0. 8, ratio=1, alternative=&#39;two-sided&#39;)print(&#39;Minimum sample size required to reach significance: {:. 0f}&#39;. format(round(n)))  Minimum sample size required to reach significance: 1571  Conclusion : This article explained how simulation can be used to estimate power of an A/B experiment when a closed form solution doesn’t exist. "
    }, {
    "id": 8,
    "url": "https://anaveenan.github.io/fastpages/markdown/2020/01/14/test-markdown-post.html",
    "title": "Example Markdown Post",
    "body": "2020/01/14 - Basic setup: Jekyll requires blog post files to be named according to the following format: YEAR-MONTH-DAY-filename. md Where YEAR is a four-digit number, MONTH and DAY are both two-digit numbers, and filename is whatever file name you choose, to remind yourself what this post is about. . md is the file extension for markdown files. The first line of the file should start with a single hash character, then a space, then your title. This is how you create a “level 1 heading” in markdown. Then you can create level 2, 3, etc headings as you wish but repeating the hash character, such as you see in the line ## File names above. Basic formatting: You can use italics, bold, code font text, and create links. Here’s a footnote 1. Here’s a horizontal rule: Lists: Here’s a list:  item 1 item 2And a numbered list:  item 1 item 2Boxes and stuff:  This is a quotation    You can include alert boxes…and…    You can include info boxesImages: Code: General preformatted text: # Do a thingdo_thing()Python code and output: # Prints '2'print(1+1)2Tables:       Column 1   Column 2         A thing   Another thing   Tweetcards: Altair 4. 0 is released! https://t. co/PCyrIOTcvvTry it with: pip install -U altairThe full list of changes is at https://t. co/roXmzcsT58 . . . read on for some highlights. pic. twitter. com/vWJ0ZveKbZ &mdash; Jake VanderPlas (@jakevdp) December 11, 2019Footnotes:       This is the footnote.  &#8617;    "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')
    this.metadataWhitelist = ['position']

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}