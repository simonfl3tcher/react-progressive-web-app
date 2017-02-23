### React Progressive Web App Repo

What is React PWA? It is an very opinionated react based repository which has been optimised for Progressive Web App development.
In its current format, it will hit 100/100 when run through the [Lighthouse](https://developers.google.com/web/tools/lighthouse/) audit. You can
test this out by visiting the [demo](https://d103dzdze3hklu.cloudfront.net/#/) and generating a lighthouse report against it.

There are many different ways to structure an application, this is the way that I tend to structure my applications. I think ultimately you could
strip out the webpack.config.js file, tweak it slightly and then you will be on your merry way. But, you would still need to create a manifest, upload
the images and make sure they are referenced correctly, that is why I decided to opensource this repo as it will allow you to just write React code without
worrying about configuration.

### Opinions

- The repo uses [Webpack 2](https://webpack.js.org/) - which makes use of tree shaking and also route based chunking.

- The repo uses the `public` directory for webpack output. Within that it then have an `assets` directory which will hold the assets created by webpack but also the icons for the manifest.

- The repo has full separation of concerns around components, what does this mean? It means that all components, their assets and their tests are kept in the same folder. [Here](https://github.com/simonfl3tcher/react-pwa/tree/master/src/components/Home) is a good example of what I mean.

- The repo uses Mocha and Chai for it's testing framework, this could easily be switched out for something like [Jest](https://facebook.github.io/jest/) if desired.

- The repo comes with [Nightwatch](http://nightwatchjs.org/) as the standard e2e testing framework. I have tried multiple frameworks and found this is by the far the best at the moment.

- The repo uses [`offline-plugin` for webpack](https://github.com/NekR/offline-plugin). This was a concious decision. Originally, I wrote the caching myself but after debugging for a while it felt right to let something that made to handle that job to deal with that.

- The repo uses route based chunking as outlined in point one, but this means that the react router implementation needs to be done with `getComponent`. You can see this [here](https://github.com/simonfl3tcher/react-pwa/blob/master/src/routes.jsx#L20).

Arguably, you could switch a lot of this out for your own approach, but then what would be the point in using a repo 😉 .

### Installation

Please follow the following steps to get up and running.

  1. Install dependencies:

    ```javascript
    npm install && flow-typed install
    ```

  2. Run the unit tests

    ```javascript
    npm test
    ```

  3. Run the e2e tests

    ```javascript
    npm run nightwatch
    ```

  4. Run the static type checker

    ```javascript
    npm run flow
    ```

  5. Start the webpack server

    ```javascript
    npm run server
    ```

### Maifest

In order to make this PWA your own you need to change the [Manifest](https://github.com/simonfl3tcher/react-pwa/blob/master/public/manifest.json) information. Once you have updated this, you will be able to see the changes in the Application tab of your Dev tools.

Finally, you will need to change the icons, at the moment there are just some default icons, in the [`public/assets/images/icons`](https://github.com/simonfl3tcher/react-pwa/tree/master/public/assets/images/icons) directory. It would be in your best interest to update these icons to be something more unique to your project.

### Hosting

You can host this site anywhere you want really as long as you can secure it using an SSL. I personally went for hosting on AWS S3, with CloudFront. This
will provide further server side caching which will mean even when you are online, the site loads super quick. I realise this is not for everyone, but for
people where squeezing every last bit of page load out of a stone matters, I would highly recommend looking at AWS.

This repo is current a static based repo, I also aim to keep it that way. If you want to provide realtime information you can callout to an API using websockets
or something similar. Adding something like Rails or Django is going to slow down the inital load time of pages, which will result in a down ranking of your PWA.

[CloudFormation And Static Sites](https://serverlesscode.com/post/instant-static-site-cloudformation/) may help if you are unfarmiliar with AWS.

### Lighthouse

In order to see how your are getting on in your PWA endevour, I would strongly recommend [Lighthouse](https://developers.google.com/web/tools/lighthouse/).
It gives you all the information that you need in order to hit the PWA targets. It is also backed by Google so you know that if you hit those targets, you 
are on to a winner.

### Caveats to success

This repo is not a silver bullet (unless you keep it exactly as it is, which I doubt you are going to do). So as you make changes or add to your codebase you need to be aware of the things that may affect your Lighthouse score:

- CSS Rules
- HTTPS
- JavaScript caching

### TODO:

Some things that are not currently covered in the repo.

- [ ] Push notification support
- [ ] External caching
- [ ] Image asset support

### Demo

Vist [https://d103dzdze3hklu.cloudfront.net/#/](https://d103dzdze3hklu.cloudfront.net/#/) to see a demo in action.
You should also visit this on your phone and add to your homescreen, it will allow you to get a feel for how it works
on a phone and the differences between a native app and a progressive web app.
