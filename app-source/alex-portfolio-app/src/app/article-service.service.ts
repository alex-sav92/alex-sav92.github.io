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
          title: 'Writing for tech',
          content: 'My collaboration with <a href="https://code-maze.com/net-core-series/" target="blank">code-maze</a> was short. They are a group from Serbia, writing very vast and diverse programming content. I managed to write few articles on the topic of software development using .NET, in a peer-reviewed system. This collaboration got me some valuable insights I will share below about how to write quality articles on programming. In crafting the perfect programming articles, there are few aspects to consider, in order to help people the best way possible. Your clients include people with specific problems to solve, or people willing to learn new, niche and specialized features of a language or a technology. Here is what I learned to do better:'+
          '<ul><li>Keep a <strong>clean, gradually unfolding structure</strong>. Start very short and concise, with the objective and what will you achieve at the end. Then, expand litlle by little. Follow eventually with a structure of what you`re about to present, with chapters, if this is the case. Then, dive even deeper into the details. Writing for online is allowed to be a bit more verbose, since users can easily search through and move to their specific area of interest, if they want to skip some details. If content spans across multiple topics, use the tools available to each specific publishing platform to split that content into clearly separated units - be they called sections, sub-topics etc. Use appropriate headings for them. Finish up with a closing statement or a conclusion. The same simple rules we were taught in school about composing text are still applicable - try keeping a clear separation of introduction - body - closing.</li>' +
'<li>Use <strong>simple words</strong>. Use words native to the technology or technical ecosystem you are presenting. Avoid using equivalent terms or concepts from other programming language, because this creates sometimes a confusion in people\'s minds and the context can get lost. Prefer simple, clear language, with words that are used naturally by people in everyday life. If any specific explanations seem too abstract or hard to explain in simple words, you may try analogies or metaphors, but I also suggest attention in this area - analogies or metaphors should also refer to actions most people understand well and are familiar with. One quick example learned from the Microsoft documentation pages - they were presenting the concept of async using the act of preparing breakfast. I took this example as a great analogy, and tried to let it inspire me any time I was about to explain a concept that is a bit too technical but can be understood easily, with the right metaphor.</li>'+
'<li>Prepare <strong>simple examples with code</strong>. All articles required code to be shown in order to demonstrate an idea. Because learning is seen as very practical, and the goal for code-maze is to make it easy for users to understand, and also copy-paste and test the code themselves if they want to. Prefer declarations of classes that keep <strong>familiar concepts</strong>, such as "Person", "Student", "House", "Car", "Dog" etc. Even if they might look boring or overused in tutorials, it is important to be introduced to new subjects in manners that are still familiar, and then, each person will adapt to their specific, more complex code base. Working from start with very <strong>complex abstractions can be overwhelming</strong> and make people quit if they don\'t catch it quickly. Remember, when being a programming writer, you have to always keep the user in focus. It is not about you showing off your capacities to abstract, or to think of complex architectures. It is about presenting, demonstrating, detailing, and helping people understand some features and adapt them to their future needs.</li>'+
'<li><strong>Test, test, test</strong>. Make sure your code samples really work as you expect them to. Few times, my article was returned back to me due to this exact reason. In demonstrating a link between a cause and an effect, make sure your results are accurate, and do not contradict your initial hypothesis. This looks specifically unprofessional. Also, try thinking about how your code would act in <strong>different environments, different platforms </strong>running your type of code, different OSs, etc. Try and ensure a code example as <strong>version-neutral</strong> as possible, so it can be ran by as many people as possible.</li>'+
'<li>Last but not least, writing aspects - <strong>grammar and tone</strong>. People tend to overlook grammatical mistakes in technical contexts, preferring to claim that this aspect is secondary, and the focus is on the actual code. I learned from code-maze that this is not the case. If you want to present as professional, you should keep a keen eye on such details. Yes, people can understand sometimes a typo or a missing letter can happen. But better not make a habit out of ignoring the grammar. Also, the tone - make sure the reading of the text does not feel aggressive or like a know-it-all. Keep a collaborative, open tone in your article. Some people might tend to use a more demanding or aggressive tone. This is not recommended in professional setups. I learned to aim for a friendly, open tone in the writing, even if I am not yet an expert in conveying this in my writing. I used grammarly for this, and it was a huge help, a help that I also use now, in some specific areas. I recommend it for people who need to write a lot, maybe in a language that\'s not native, and may not be aware of the tone.',
          shortContent: 'What makes a programming article good? I found out there are some good general rules, and writing for tech is not the same as literature. Let me share my story.',
          tags: ['software'],
          published: new Date(2024, 5, 10),
          seoTitle: 'tech-writing',
          imageName: 'code_writer.jpg'
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
        title: 'Content creation for tech - the good, the bad and the ugly',
        shortContent: 'Being a creator for programming content can be a tough cookie. Here is how I approached it.',
        content:
        '<p>I had the privilege to collaborate with an educational platform in the IT sector. With their help and resources, I created two programming courses. The content is mainly based on videos, videos where I show a computer screen, and write various types and pieces of code, and then show how they behave.</p>',
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
