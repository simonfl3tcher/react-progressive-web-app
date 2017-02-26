### React Progressive Web App

What is this repo? Well, it's a very opinionated React based repository which is optimized for Progressive Web App development. In its current format, it will hit around 95-100 out of 100 when running through the [Lighthouse](https://developers.google.com/web/tools/lighthouse/) audit. You can test this out by visiting the [demo](https://d103dzdze3hklu.cloudfront.net/#/) and generating a lighthouse report against it.

There are many different ways to structure an application; this repository is the way that I tend to structure my applications. I think, you could strip out the `webpack.config.js` file, tweak it slightly and then you will be on your merry way. But, you would still need to create a manifest, upload the images and make sure they are referenced correctly, that is why I decided to open source this repo as it will allow you to just write React code without worrying about painful configuration.

### Opinions

- It uses [Webpack 2](https://webpack.js.org/) - which makes use of tree shaking and route based chunking.

- It uses [Flow](https://flowtype.org/) - A static type checker for JavaScript. Although not that useful right now, moving forward in developing your app, it is there to protect you.

- It uses the `public` directory for Webpack output. Within that, it then has an `assets` directory which will hold the assets created by Webpack but also the icons for the manifest.

- It has full separation of concerns around components, what does this mean? It means that all components, their assets, and their tests are kept in the same folder. [Here](https://github.com/simonfl3tcher/react-progressive-web-app/tree/master/src/components/Home) is a good example of what I mean.

- It uses Mocha and Chai for its testing framework. Choosing Mocha and Chai was a conscious decision. However, this could easily be switched out for something like [Jest](https://facebook.github.io/jest/) if desired.

- It comes with [Nightwatch](http://nightwatchjs.org/) as the standard e2e testing framework. I have tried multiple frameworks and found this is by far the best at the moment.

- It uses [`offline-plugin` for webpack](https://github.com/NekR/offline-plugin). Again, choosing `offline-plugin` was a conscious decision. Originally, I wrote the caching myself, but I felt that with open sourcing this repo, it needed to include a plugin that is actively being maintained and optimized for caching.

- The repo uses route based chunking as outlined in point one, with this, it means that the react router implementation needs to be done with `getComponent`. You can see this [here](https://github.com/simonfl3tcher/react-progressive-web-app/blob/master/src/App.jsx#L17).

Arguably, you could switch a lot of this out for your approach, but then what would be the point in using an existing repo 😉.

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

### Manifest

To make this PWA your own, you need to change the [Manifest](https://github.com/simonfl3tcher/react-progressive-web-app/blob/master/public/manifest.json) information. Once you have updated this, you will be able to see the changes you made in the Application tab of your Dev tools.

![manifest.json screenshot](https://s3-eu-west-1.amazonaws.com/simonfl3tcher-github-image/Screenshot+2017-02-23+18.42.56.png)

Finally, you will need to change the icons, at the moment there are just some default icons, in the [`public/assets/images/icons`](https://github.com/simonfl3tcher/react-progressive-web-app/tree/master/public/assets/images/icons) directory. It would be in your best interest to update these icons to be something more unique to your project.

### Hosting

You can host this site anywhere you want as long as it can be easily secured using SSL. I personally went for hosting on [AWS S3](https://aws.amazon.com/s3/), with [CloudFront](https://aws.amazon.com/cloudfront/). CloudFront will provide further caching which will mean even when you are online without a cache storage; the site will load super quick. I realize this is not for everyone, however, if you are going to be making changes regularly and you need to blow away the cache storage, I would highly recommend looking at [CloudFront](https://aws.amazon.com/cloudfront/).

[CloudFormation And Static Sites](https://serverlesscode.com/post/instant-static-site-cloudformation/) may help if you are unfamiliar with AWS.

This repo is currently a static based repo; the aim is to keep it that way. If you want to provide dynamic information, you can call out to an API using something like [Axios](https://github.com/mzabriskie/axios). Eventually (although, not covered in this repo) you can implement the [Cache then network](https://jakearchibald.com/2014/offline-cookbook/#cache-then-network) approach, which would mean your app works with dynamic content on and offline.


### Lighthouse

To see how you are getting on in your PWA endeavor, I would highly recommend [Lighthouse](https://developers.google.com/web/tools/lighthouse/).
It gives you all the information that you need to hit the PWA targets. It is also a Google product, so you know that if you hit those targets, you
are on to a winner.

### Caveats to success

This repo is not a silver bullet (unless you keep it exactly as it is, which I doubt you are going to do). So, as you make changes or add to your codebase you need to be aware of the things that may affect your Lighthouse score:

- CSS Rules - You need to make sure that you do not add "unused rules" to your stylesheets. This will reduce unnecessary bytes consumed by network activity.
- HTTPS - You need to make sure that when you deploy the application that it is using HTTPS and redirecting HTTP traffic to HTTPS.
- JavaScript libraries - these are a sure-fire way to increase your load time, make sure you fully evaluate if you need the library before adding.

Again, most of this stuff is covered by Lighthouse, so if you regularly check it, you will soon find out if your app is going down the wrong track.

### TODO:

Some things that are not currently covered in the repo.

- [ ] Push notification support
- [ ] Cache then network support
- [ ] Background Sync support

### Demo

Vist [https://d103dzdze3hklu.cloudfront.net/#/](https://d103dzdze3hklu.cloudfront.net/#/) to see a demo in action.
You should also visit this on your phone and add to your home screen; it will allow you to get a feel for how it works on a phone.

### Contributions

Contributions are very welcome! If you found a bug or some improvements, feel free to raise an issue and send a PR! Please see the [CONTRIBUTING](https://github.com/simonfl3tcher/react-progressive-web-app/blob/master/CONTRIBUTING.md) file for more information on how to contribute.

### License

MIT
