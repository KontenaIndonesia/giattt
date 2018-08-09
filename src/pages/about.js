import React from "react"
import { Link } from "gatsby"
import Layout from '../components/Layout'
import PhotoGrid from '../components/photoGrid'
import Bio from '../components/Bio'

export default () => (
  <Layout>
    <Bio 
      title="About me"
      description={[
      <React.Fragment>
        <a href="http://maitrikpatel.com/resume/Maitrik_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        <a className="emailContact" href="mailto:maitrik1419@gmail.com?subject=LetsMakeFuture&body=Lets make wonderful things together.">maitrik1419[at]gmail[dot]com</a>
        <a href="tel:+14088393930">+1-408-839-3930</a>
      </React.Fragment>]}
     />
    <p className="text-justify">I’m a Front-end Developer and an UX Designer based in Bay Area, California.&nbsp;I stand on the sweet spot where design &amp;
      code intersects. My comprehensive knowledge in design and technology allows me to cultivate productive teams in a synergic
      environment that meets the requirements of creatives and developers concurrently. I work with the latest techniques
      and processes in UX / Front End Development along with agile workflow that results in simple, beautiful, intuitive and
      pixel perfect interface designs &amp; products. </p>
    <p className="text-justify">I am currently working at 
        <a href="https://www.docusign.com" target="_blank">DocuSign</a> as an UI Engineer developing React componentized style guide and design system/tools using DocuSign design language to promote design consistency across all of DocuSign products. I have over 6 years of industry experience, and have been a part of design and development projects for many exceptional companies during those years, including
        <a href="https://thewaltdisneycompany.com/" target="_blank">The Walt Disney Studio,</a>
        <a href="http://www.sony.co.uk/">Sony,</a>
        <a href="http://www.sapientnitro.com/en-us.html#home" target="_blank">SapientNitro,</a>
        <a href="http://www.actuate.com/" target="_blank">OpenText,</a>
        <a href="https://www.prosper.com/invest" target="_blank">Prosper Marketplace,</a>
        <a href="http://alphonso.tv/" target="_blank">AlphansoTV,</a>
        <a href="https://martiansf.com/" target="_blank">MartianSF,</a>
        <a href="http://croudify.com/" target="_blank">Croudify,</a>
        <a href="hbpsupplier.in" target="_blank">HBPSupplier,</a> and
        <a href="http://skillmil.com/" target="_blank">SkillMil.</a></p>
    <p className="text-justify">With a MS in computer science and industry experience I still think there’s more for me to learn. I recently graduated
      from   <a href="http://www.startupleadership.com/" target="_blank">Startup Leadership Program</a> and   <a target="_blank" href="https://www.gsb.stanford.edu/programs/stanford-ignite">Stanford Ignite</a> with in-depth knowledge about entrepreneurship
      and startup ecosystem. I want to combine technological and entrepreneurship knowledge to achieve ultimate goal in life&nbsp;to&nbsp;solve
      one of the global challenges that improve people's lives.</p>
    <p className="text-justify display-none">I am exploring for an opportunity to create an intuitive, elegant and a cutting-edge user experience
      for a promising product, a motivating mentor and an innovating organization. </p>

    <PhotoGrid title={["Photo", <br />,  "Grid"]}/>

    <p className="text-justify">Apart from designing &amp; building things, I have an unwavering love for wanderlust, to get lost and explore new places
      which cannot be checked-in by any map services. My all-time favorite leisure time activities include paragliding and
      rock climbing.</p>
      
    <hr />
      <h2>What people say about me !</h2>
    <hr />

    <p>Don't be a stranger! Give me a shout at <a href="mailto:maitrik1419@gmail.com?subject=LetsMakeFuture&body=Lets make wonderful things together.">maitrik1419[at]gmail[dot]com</a> or find me at one of the links below.</p>

  </Layout>
)