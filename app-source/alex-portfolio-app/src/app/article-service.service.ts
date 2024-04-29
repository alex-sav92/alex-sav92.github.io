import { Injectable } from '@angular/core';
import { Article } from './models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {
  public articles: Article[] = [];
  constructor() {
    if (this.articles.length == 0) {
      this.articles = [
      {
        title: 'Read your bank transactions in less than 5 minutes?',
        shortContent: 'There are multiple uses for open banking. This is just one of them. Make sure it counts.',
        content: '<p>Use open banking APIs, such as <strong>Nordigen</strong>, for enabling access to bank accounts data. The system is secured with token-based systems, and every action is executed only under explicit user consent. Each prompt for a consent explains in clear details what are the things you consent to be read, and when is that consent\'s expiration date.</p>' +
          '<p>Nordigen was acquired by <a href="https://gocardless.com/bank-account-data/">GoCardless</a>, and you can still use their starting functionality, along with other enrichments that this acquisition brought up.</p>' +
          '<p>If you are new to the topic of open banking, do not worry. This is a vast subject, with applications in multiple areas. When I first found out about it, I was also a bit confused, with questions such as "where do I start?", or "what do I search first?". I recommend <a href="https://gocardless.com/guides/posts/open-banking/">this read</a> as a good introduction, or an overview of the domain.</p>'+
          '<p>Just to give few examples of areas where open banking can bring value and improvements, I would say:' +
          '<ul><li>Offering better payment or crediting options for businesses</li>' +
          '<li>Offering better money management for customers</li>' +
          '<li>Better decision making in financial terms, by using aggregation of data across multiple accounts</li></ul></p>' +
          '<p>And for people who are more <strong>hands-on</strong> and prefer to learn by doing, I also have a very nice resource to start up. To see how easy ' +
          'it can be with GoCardless, follow their <a href="https://developer.gocardless.com/bank-account-data/quick-start-guide">quickstart guide</a> and get ' +
          'ready to be amazed by how quickly you can get access to your own personal financial data, even aggregated across multiple bank accounts!</p>' +
          '<p>The guide follows just 6 simple steps, and is integrated with the majority of the banks in the EU. Technically, upon the data gathered after these steps, you can build any sort of financial management application. ' +
          '<p>Maybe take a moment to glance at your financial decisions, first :). And then, use your imagination to find ideas. My first thought was about an expense tracker app.' +
          'Yours could be about...credits, maybe? Or about detecting trends or anomalies in the transactions. Who knows?</p>',
        published: new Date(2024, 3, 9),
        tags: ['software', 'fintech', 'openbank'],
        seoTitle: 'open-bank',
        imageName: 'money.jpg'
      },
      {
        title: 'How do you learn to code?',
        shortContent: 'The battle of choice - which platform will help you learn at your best capacity? And how do great learning experiences look?',
        content:
        '<p>Tech is hard already, we need good experiences in learning. Each and every new application, technology or blog brings up various styles of presenting information. Combing through different perspectives can sometimes be difficult. Each of us is probably also multitasking and finding it hard to dedicate time to learning.</p>' +
        '<p>Let\'s also factor in that each person has their own preferred <strong>styles of learning</strong> - visual, audio, tactile, etc. It is rather difficult to create materials that adress as many people as possible</p>'+
        '<p>In my own perspective, I find that the most ideal forms of learning in terms of programming are the video + coding types of content, where you mainly watch people present and/or practice some technical concepts, and where' +
        ' they offer you space and encouragement to practice and code along with the instructors. This is my preffered way because it offers the chance to collaborate and get the feeling of togetherness, and it is also a quick way to get feedback on your practice.' +
        ' If results are as expected or as the tutor presents them, you get the good news plus a motivation boost at each step!</p>' +
        '<p>Through my experience in coding, I\'ve learned that some people have different opinions. They might prefer written articles, on which they can take as much time as needed, scan and skim through, re-read, or find quickly where to refer back if anything slips their memories at a later time. And I agree, in some specific contexts, '+
        'I find it very useful to use such written material, especially when publishers have organized them very well and gave a useful structure to the document.</p>' +
        '<p>One other personal discovery is that at least for me, audio-only does not work. Information sent only through audio channels simply gets "through" me, if I may say so. I get too easily distracted by other activities that pop up in the visual plan, and the audio track remains "tuned out" of my conscience.</p>' +
        '<p>Another potentially useful format is a <strong>Code Lab</strong>. Depending on how advanced they are with their features, some platforms such as Pluralsight or codecademy offer support and resources for live coding and testing your knowledge online, with immediate results. They also offer the setup and required environments and tools for completing the work, even without making you insall multiple things and doing some repetitive tasks on your own machine. Through web interfaces, good learning platforms can offer this kind of setup and scenarios, where you are free to play around and experiment results of your own code, with new tech. ' +
        ' And if you\'re even more lucky, some platforms also have prepared automatic tests for your solutions, so they can offer not just instant feedback on your work, but also give you detailed information of your potential mistakes, in case they happen. </p>' +
        '<p>Also, keep in mind one other factor that might help - <strong>gamification</strong>. Microsoft for example, on their platform dedicated to learning ("Learn"), have built in a system of points and achievements, such that whenever you complete a lesson unit or a learning path on their platform, you are congratulated and you accumulate points that help towards the positive feedback loop. Also, it helps with the encouragement some people need to go a longer way.</p>' +
        '<p>Another clear factor in picking a platform is cost, obviously. While some platforms are more oriented towards enterprise clients and large companies (Pluralsight) and require therefore some pricier subscriptions, the free market also offers alternatives that are free or much cheaper. For low cost options, you can check udemy or domestika. For free resources, I guess I cannot provide specific platforms, since everything starts with googling something. And depending on the specific topics of tech you study, some sites are specialized in one topic vs another. And my skills are limited, so my knowledge of platforms is also limited. But just for fun, I will enumerate few examples of what helped me: ' +
        '<a href="https://www.c-sharpcorner.com">C# corner</a>, <a href="https://www.w3schools.com">w3schools</a>, <a href="https://code-maze.com">code-maze.com</a></p>' +
        '<p>So for your next learning project in tech, maybe these ideas can help a bit towards choosing a learning platform more fit to your needs and style.</p>',
        published: new Date(2024, 2, 18),
        tags: ['software', 'education'],
        seoTitle: 'learn-curve',
        imageName: 'study.jpg'
      },
      {
        title: 'Tech & content creation - the good, the bad and the ugly',
        shortContent: 'Being a content creator for programming content can be a tough cookie. Here is how I approached it.',
        content: '<p>I had the privilege to collaborate with an educational platform in the IT sector. With their help and resources, I created two programming courses. The content is mainly based on videos, videos where I show a computer screen, and write various types and pieces of code, and then show how they behave.</p>',
        published: new Date(2024, 3, 25),
        tags: ['software', 'fintech', 'openbank'],
        seoTitle: 'content',
        imageName: 'content.jpg'
      }
      ];
    }
  }

  getAll(): Article[] {
    return this.articles;
  }

  getBySeoTitle(seoTitle: string) : Article | undefined {
    let article = this.articles.find(a => a.seoTitle == seoTitle);
    if (article != undefined)
      return article;
    return undefined;
  }
}
