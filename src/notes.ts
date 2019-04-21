let notes: { [key: string]: string } = {
  slide1: `
        - Introduction
        - Who Am I
        - Pronouns
        - I'm going to tell the story of how I fell into open source
        - Everyone in this room can do it regardless of what your skillset is we can use your help
        - This talk from my point of view as a developer but please don't let this stop you contributing if your skillset is different, different is great!`,
  slide2: `
        This descriptions is pretty close for the more permissable licences and gives us a good basis.
    
        - MIT: Do whatever you want, attribute me but don't blame me for any mistakes that are there
        
        choosealicence.com ➜ Github owned`,
  slide3: `
        - Finding the Bug, contributing back the fix and becoming maintainer (About a week)
        - Using Nustache as a test bed and clearing up the backlog
        - Outgrowing JDiamonds code and wanting "new" with dotnet core and netstandard`,
  slide4: `
        - Greenfield can be problematic
        - 70 days between start and <i>almost</i> beta Alpha 15`,
  slide5: `
        - I had a sense of humor about it
        - Reading more and discovering more lead me to expanding my own efforts
        - Regex parser wasn't good enough, had to be a scanning parser
        - Configuration had to be like asp net core, pluggable and extendable
        - Scope Creep and 265 days to Between Alpha 15 and 16`,
  slide6: `
        - Burnout on something that you're choosing for yourself
        - Feeling stupid and imposter syndrome
        - Breakthrough but why I didn't make a beta
        - Everything I consider common sense at work, I didn't do for myself.
        - Sometimes these things we think of as restrictions are just good practice
        - I did finally release a version 1.0 and Stubble now has 100+ ★'s on Github`,
  slide7: `
        Source control is pretty central to most development efforts and a basic understanding of the tooling will help lower the barrier of entry.
        
        Git is the most common and Github have some excellent sources and tooling on how to get started.`,
  slide8: `
        - CI services give you confidence that it doesn't only <i>Work on your machine</i>
        - Integrates with your Source Control host so you can verify contributions before accepting them
        - Commonly these are used with branch policies to create and push releases only if your build is successful
        - Azure pipelines can be use separately from the source control and manages builds and releases separately
    `,
  slide9: `
        - Coverage from your tests is useful but not <b>must</b> target 100%
        - Tools providing history allow you to track improvements or regressions.`,
  slide10: `
        - However you decide to do this is <u>fine!</u>
        - Doesn't change often but when it does can cause fustration
        - Cake/Nuke: Both use C# based DSLs
        - Anything else: As long as its clearly defined and works then it's good!
    `,
  slide11: `
      - Using learning from other projects is healthy and a great way to learn
      - NodaTime: Project layout and CI Systems
      - Markdig: String slicing
      - BenchmarkDotNet: Removed custom system and used performance test templates and data from Mustache.java`,
  slide12: `
      - Morning Dew: Aggregated posts from the dotnet world
      - Steve Gordon: MVP and has been recently writing interesting posts on perf.
        Also wrote blog posts on starting to speak causing me to be here!
      - Matthew Warren: Deep dives on the internals of dotnet runtime.
      - Xoofx: Performant code, JIT in C#, Stark language (Twitter)`,
  slide13: `
      Twitter is complicated and honestly can be pretty toxic.
      
      Follow people who lead you to interesting content or expand your own horizons`,
  slide14: `
      - Start talking about the problem you want to solve or what you want to learn. Maybe others want to come along with you?
      - Github Explore: has plenty of of projects for you to look at and begin to play with and learn from.
      - Up For Grabs: Tasks specifically curated for new contributors
      - Documentation: How to build a project, missing dependencies`,
  slide15: `
      - So many excellent projects, maintainers, contributors and influencers in the community and we could only use more
      - Talk is Open Source on github (React slides thanks to FormidableLabs & Spectacle)
      - Thank Netlify`,
  slide16: `
      - Thank you everyone
      - Any Questions?
  `
};

notes = Object.entries(notes).reduce((acc, entry) => {
  acc[entry[0]] = entry[1].trim().replace(/(\r\n|\n|\r)/gm, '<br/>');
  return acc;
}, {});

export default notes;
