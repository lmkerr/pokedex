# Pokédex

This project is designed to be a coding exercise for the PrizePicks interview process. 

## Instructions

This project is built with Vite & `pnpm` using React & TypeScript for Node v18x. The Vite react generator includes standard CSS but the Styled Components library has been added for expandability.  Some of 

1. To get started, clone and navigate to the root of the repository, then run `pnpm install` in the terminal.
2. Once your dependencies are added, run `pnpm dev` to run a local dev instance of the application.
3. Nope... that's it. You're done.

For the sake of this demo, and the fact that the only varible being used today is not sensitive data, the production url for requesting pokemon has been exposed by removing `.env.local` from gitignore. In an enterprise scenario, you should add all `.env.*` files to `.gitignore`.

## Business Requirements

- [x]  Use the Pokemon API to make API requests for data https://pokeapi.co/docs/v2.
- [x]  Able to search for any Pokemon.
- [x]  Able to see a history of what has been searched and revisit at anytime.

## Technical Requirements

- [x] You are allowed to use scaffolding technology like “Create React App” or similar.
- [x] This project should be done with the latest React framework.
- [x] This project should be done with the latest Redux framework.
- [x] This project should be done using TypeScript.
- [x] This project should be done using version control, preferably git.
- [x] This project can be styled with SCSS/CSS or Styled Components if anything needs
- to be styled.
- [x] This project should include a README that addresses anything you may not have
completed. It should also address what additional changes you might need to make
if the application were intended to run in a concurrent environment. Any other
comments or thoughts about the project are also welcome.

## Bonus Points

- [ ] Able to see details about abilities, moves, species, sprites and types upon
searching.
- [ ] Able to see other evolutions of Pokemon and be able to navigate to specific
Pokemon in the evolution chain.
- [ ] A sleek and intuitive layout that resembles a Pokedex.
- [ ] Automated tests that ensure the business logic implemented is correct.

## Thoughts & Comments

I had a really fun time on this project.  Unfortunately my weekend didn't allow me much heads down time as I just put in 30 mintues here and there as I could. Given the time allotment, I wanted to tackle the business requirements first.  I also wanted to make sure that I had a demoable url available upon completion of a working product using AWS S3 -> AWS CloudFront -> AWS Route53.  Unfortunately I'm having some certificate / CNAME issues on my domain and it could take some time to resolve with the DNS, so at this time I can only provide the CloudFront URL.  

I added a limited but scalable CI/CD pipeline using 2 GitHub actions workflow that runs a production environment for the `main` branch and a development environment for the `dev` branch.  Environemnts for each are set up within the GitHub repository. CI is automatically run when deploying. At the sake of saving costs for a side project, I decided to remove the steps from the dev GitHub Action for deploying the project to S3 and clearing the CloudFront cache upon deployment.  But from the file you should get the gist of how it might work in an enterprise level application.

### What's not included (yet..)

I had a lot of fun with this and I'm probably going to continue to work on getting the rest of this over the "finish" line.  But due to wanting to return this in a decent timeline I ommitted a couple of the bonus points for now.  Hopefully by the time of our next interview, I may have some more of this done.

- [ ] Unit tests with Vitest or Jest
- [ ] Cucumber E2E tests with Gherkin syntaxed business rules and scenarios.
- [ ] A functional CNAME domain at `https://pokdex.lorenkerr.com/`
- [ ] Additional information & styling around the pokemon details page & general styling cleanup.
- [ ] Consolidation of css into styled components
- [ ] CI/CD improvement to include a GitHub action that handles a pipeline check for pull requests.
- [ ] Storybook implimentation for Component Library
- [ ] Search History cleanup. Only show the last 5 searches
- [ ] Typeahead on search
  