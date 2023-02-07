<h2>Motivation</h2>
<p>Motivation is server pagination as done for admin quiz-results in checkyourtechskills.com. Here we have [serverPageIndex].tsx files each file is a server page . To navigate on the client between pages one use Link from next.js but we need to increment also serverPageIndex. Thus we need two buttona : first increment to the next page and second to navigate and this is  cumbersome. If you try to increment the page index on the Link onClick you will fail because click is invoked after the link is executing</p>
<p>So the motivation is to replace two buttons one to increment and one to navigate with one</p>

<h2>Design</h2>
useRouter of next.js with one button 

<h2>Points of interest</h2>
In this design i do not persist the index incremented. However, in checkyourtechskills.com i get the index from the server and pass it to the page thus i can implement increment and decrement nicely