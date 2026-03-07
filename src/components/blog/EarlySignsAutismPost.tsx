'use client';

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

const EarlySignsAutismPost = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-white">
        <article className="max-w-4xl mx-auto px-4 pt-32 pb-12 md:pt-40 md:pb-16 lg:pt-48 lg:pb-20">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-raisin-black mb-6 leading-tight">
              Early Signs of Autism in Toddlers: A Minnesota Parent&#39;s Guide
            </h1>
            <div className="flex flex-wrap gap-4 text-muted-foreground mb-8">
              <span className="text-base">Ability Avenues Team</span>
              <span>•</span>
              <time dateTime="2026-03-07" className="text-base">March 7, 2026</time>
            </div>
          </header>

          <div className="mb-12">
            <Image
              src="/images/blog-placeholder.jpg"
              alt="Early signs of autism in toddlers — a parent's guide for Minnesota families"
              className="w-full h-auto rounded-xl object-cover"
              width={1200}
              height={630}
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none">
            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-raisin-black mb-6">1. Why Recognizing Early Signs Matters</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                As a parent, you know your child better than anyone. You notice the small things&mdash;how they react to a new sound, whether they look up when you call their name, or how they play alongside other kids at the park. Sometimes those observations come with a quiet question: <em>&ldquo;Is this typical, or should I be concerned?&rdquo;</em>
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Research consistently shows that <strong>earlier identification of autism leads to better long-term outcomes</strong>. A 2023 randomized controlled trial published in <em>Autism</em> found that toddlers who received intervention earlier showed significantly greater gains in social communication and adaptive behavior compared to those who started later. (<a href="https://journals.sagepub.com/doi/10.1177/13623613231159153" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">Trembath et al., 2023</a>)
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                The reason is straightforward: during the first few years of life, the brain is developing rapidly and is especially responsive to learning and support. When children receive help during this window, they have the best chance of building communication, social, and daily living skills that serve them for years to come. (<a href="https://ncbi.nlm.nih.gov/pmc/articles/PMC6034700/" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">Zwaigenbaum et al., 2015 &mdash; NIH</a>)
              </p>
              <blockquote className="border-l-4 border-pacific-cyan bg-pacific-cyan/10 p-6 my-8 rounded-r-lg">
                <p className="text-lg text-raisin-black italic">
                  You don&rsquo;t need a diagnosis to start paying attention. Noticing early signs isn&rsquo;t about labeling your child&mdash;it&rsquo;s about opening doors to support while the window is widest.
                </p>
              </blockquote>
            </section>

            <hr className="my-12 border-gray-300" />

            {/* Section 2 */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-raisin-black mb-6">2. What Are the Early Signs of Autism?</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Autism spectrum disorder (ASD) affects how a child communicates, interacts with others, and experiences the world around them. No two children with autism are exactly alike, but the Centers for Disease Control and Prevention (CDC) identifies two core areas where early signs tend to appear: (<a href="https://www.cdc.gov/autism/signs-symptoms/" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">CDC &mdash; Signs and Symptoms of ASD</a>)
              </p>

              <h3 className="text-2xl font-bold text-raisin-black mb-4 mt-8">Social Communication and Interaction</h3>
              <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 mb-6">
                <li>Does not respond to their name by <strong>9 months</strong></li>
                <li>Does not show facial expressions like happy, sad, or surprised by <strong>9 months</strong></li>
                <li>Does not play simple interactive games like pat-a-cake by <strong>12 months</strong></li>
                <li>Uses few or no gestures (like waving goodbye) by <strong>12 months</strong></li>
                <li>Does not share interests with others (pointing to show you something) by <strong>15 months</strong></li>
                <li>Does not point to show you something interesting by <strong>18 months</strong></li>
                <li>Does not notice when others are hurt or upset by <strong>24 months</strong></li>
                <li>Does not engage in pretend play (like &ldquo;feeding&rdquo; a doll) by <strong>30 months</strong></li>
                <li>Shows little interest in peers or has difficulty joining play by <strong>36 months</strong></li>
              </ul>

              <h3 className="text-2xl font-bold text-raisin-black mb-4">Restricted or Repetitive Behaviors</h3>
              <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 mb-6">
                <li>Lines up toys or objects and gets upset when the order is changed</li>
                <li>Repeats words or phrases over and over (echolalia)</li>
                <li>Plays with toys the same way every time (e.g., spinning wheels instead of driving a car)</li>
                <li>Focuses on parts of objects rather than the whole toy</li>
                <li>Gets very upset by small changes in routine</li>
                <li>Flaps hands, rocks body, or spins in circles</li>
                <li>Has unusual reactions to sensory input&mdash;sounds, smells, textures, or lights</li>
              </ul>

              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                The National Institute of Child Health and Human Development (NICHD) notes that children with autism may also experience delayed language development, unusual eating or sleeping habits, and heightened anxiety or emotional responses. (<a href="https://www.nichd.nih.gov/health/topics/autism/conditioninfo/symptoms" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">NICHD &mdash; Autism Symptoms</a>)
              </p>

              <blockquote className="border-l-4 border-pacific-cyan bg-pacific-cyan/10 p-6 my-8 rounded-r-lg">
                <p className="text-lg text-raisin-black italic">
                  <strong>Important:</strong> Every child develops at their own pace. Showing one or two of these signs doesn&rsquo;t automatically mean autism. But if you&rsquo;re noticing a pattern across several areas, it&rsquo;s worth a conversation with your pediatrician.
                </p>
              </blockquote>
            </section>

            <hr className="my-12 border-gray-300" />

            {/* Section 3 */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-raisin-black mb-6">3. When and How Pediatricians Screen for Autism</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                The <strong>American Academy of Pediatrics (AAP)</strong> recommends that all children receive autism-specific screening at their <strong>18-month and 24-month</strong> well-child visits, in addition to general developmental screening at 9, 18, and 30 months. (<a href="https://www.healthychildren.org/English/health-issues/conditions/Autism/Pages/How-Doctors-Screen-for-Autism.aspx" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">HealthyChildren.org &mdash; AAP</a>)
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                The most commonly used autism screening tool is the <strong>Modified Checklist for Autism in Toddlers, Revised, with Follow-Up (M-CHAT-R/F)</strong>. It&rsquo;s a short questionnaire you fill out in the waiting room, and your pediatrician scores it during the visit. If the score raises concerns, a follow-up interview helps clarify whether a referral for further evaluation is warranted.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Screening is <strong>not the same as diagnosis.</strong> A screening flag means &ldquo;let&rsquo;s look more closely&rdquo;&mdash;not &ldquo;your child has autism.&rdquo; Many children who screen positive go on to have typical development. But the screening step is critical because it catches children who might otherwise wait years before getting evaluated.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed font-semibold">
                What you can do before the appointment:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                <li>Write down specific examples of what concerns you (with dates if possible)</li>
                <li>Note your child&rsquo;s strengths, too&mdash;things they do well</li>
                <li>Ask family members or daycare providers if they&rsquo;ve noticed anything</li>
                <li>Use the CDC&rsquo;s free <a href="https://www.cdc.gov/act-early/milestones/index.html" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">Milestone Tracker app</a> to compare your child&rsquo;s development to age-based milestones</li>
              </ul>
            </section>

            <hr className="my-12 border-gray-300" />

            {/* Section 4 */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-raisin-black mb-6">4. Minnesota-Specific Resources for Families</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Minnesota has strong infrastructure for supporting families who have concerns about their child&rsquo;s development. Here are the key programs and pathways available to you:
              </p>

              <h3 className="text-2xl font-bold text-raisin-black mb-4 mt-8">Help Me Grow Minnesota</h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                <a href="https://helpmegrowmn.org/" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">Help Me Grow MN</a> is the state&rsquo;s free referral system that connects families with early intervention services through local school districts. <strong>You do not need a diagnosis or a doctor&rsquo;s referral to use it.</strong> (<a href="https://helpmegrowmn.org/HMG/GetHelpChild/HowRefer/index.html" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">Help Me Grow MN &mdash; How to Refer</a>)
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 mb-6">
                <li><strong>Online:</strong> Submit a referral at <a href="https://helpmegrowmn.org/" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">helpmegrowmn.org</a></li>
                <li><strong>By phone:</strong> Call 1-866-693-GROW (4769)</li>
                <li><strong>Direct:</strong> Contact your local school district&rsquo;s early childhood team</li>
              </ul>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Services are <strong>free regardless of income or immigration status</strong>, and interpreters are available if needed.
              </p>

              <h3 className="text-2xl font-bold text-raisin-black mb-4 mt-8">Minnesota Autism Portal</h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                The <a href="https://mn.gov/autism/about-autism/screening-and-identification" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">Minnesota Autism Portal</a> (mn.gov/autism) provides information on screening, identification, and how to find diagnostic providers across the state. It also links to the MN Healthcare Program Provider Directory where you can search for CMDE assessments and EIDBI providers. (<a href="https://mn.gov/autism/about-autism/screening-and-identification" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">mn.gov &mdash; Minnesota Autism Portal</a>)
              </p>

              <h3 className="text-2xl font-bold text-raisin-black mb-4 mt-8">Learn the Signs. Act Early. &mdash; Minnesota</h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                The University of Minnesota partners with the CDC on the <a href="https://addm.umn.edu/ltsae" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">Learn the Signs. Act Early</a> program, which provides free milestone resources, training for childcare providers, and community awareness events across the Twin Cities and greater Minnesota.
              </p>

              <h3 className="text-2xl font-bold text-raisin-black mb-4 mt-8">Diagnostic Evaluation Centers in the Twin Cities</h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                If your pediatrician recommends a full diagnostic evaluation, several specialized centers serve Minneapolis-area families: (<a href="https://addm.umn.edu/resources/diagnosis" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">University of Minnesota &mdash; Diagnosis Resources</a>)
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                <li><strong>Fraser Child and Family Center</strong> &mdash; Minneapolis</li>
                <li><strong>University of Minnesota Autism and Neurodevelopment Clinic</strong> &mdash; ages 1&ndash;18</li>
                <li><strong>Children&rsquo;s Minnesota</strong> &mdash; multiple locations</li>
                <li><strong>Gillette Children&rsquo;s Hospital</strong> &mdash; St. Paul</li>
              </ul>
              <p className="text-lg text-gray-700 mt-4 leading-relaxed">
                Wait times for diagnostic evaluations can range from a few weeks to several months depending on the center. Starting the referral process early&mdash;even before you&rsquo;re certain&mdash;can save valuable time.
              </p>
            </section>

            <hr className="my-12 border-gray-300" />

            {/* Section 5 */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-raisin-black mb-6">5. From Screening to Services: What Happens Next</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                The path from &ldquo;I have a concern&rdquo; to &ldquo;my child is getting support&rdquo; involves several steps. Here&rsquo;s what the typical journey looks like for Minnesota families:
              </p>
              <ol className="list-decimal pl-6 space-y-4 text-lg text-gray-700">
                <li>
                  <strong>You notice something</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>A pattern of signs at home, daycare, or in the community catches your attention.</li>
                  </ul>
                </li>
                <li>
                  <strong>Talk to your pediatrician</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Share your observations. Ask about an autism-specific screening if one hasn&rsquo;t been done.</li>
                  </ul>
                </li>
                <li>
                  <strong>Screening and referral</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>If screening flags a concern, your pediatrician will refer you for a diagnostic evaluation.</li>
                    <li>You can also contact <a href="https://helpmegrowmn.org/" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">Help Me Grow MN</a> or <Link href="/referrals" className="text-pacific-cyan hover:underline font-medium">submit a referral to Ability Avenues</Link> directly.</li>
                  </ul>
                </li>
                <li>
                  <strong>Diagnostic evaluation</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>A specialist or team evaluates your child&rsquo;s development, behavior, and communication.</li>
                    <li>In Minnesota, a <strong>Comprehensive Multi-Disciplinary Evaluation (CMDE)</strong> determines eligibility for the state&rsquo;s <Link href="/eidbi" className="text-pacific-cyan hover:underline font-medium">EIDBI benefit</Link>.</li>
                  </ul>
                </li>
                <li>
                  <strong>Accessing services</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>With a diagnosis and CMDE, your family can access <strong>ABA therapy</strong> and other evidence-based supports through EIDBI (funded by Medical Assistance, MinnesotaCare, or MA-TEFRA).</li>
                    <li>Services can be delivered <Link href="/in-home-therapy" className="text-pacific-cyan hover:underline font-medium">in your home</Link>, at a <Link href="/center-based-therapy" className="text-pacific-cyan hover:underline font-medium">therapy center</Link>, or a combination of both.</li>
                  </ul>
                </li>
              </ol>
              <blockquote className="border-l-4 border-pacific-cyan bg-pacific-cyan/10 p-6 my-8 rounded-r-lg">
                <p className="text-lg text-raisin-black italic">
                  <strong>Don&rsquo;t wait for a diagnosis to act.</strong> While you&rsquo;re waiting for evaluation, you can contact Help Me Grow MN for free early intervention services, and you can reach out to ABA providers to get on waitlists. Starting the process early means support can begin sooner once eligibility is confirmed.
                </p>
              </blockquote>
            </section>

            <hr className="my-12 border-gray-300" />

            {/* Section 6 */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-raisin-black mb-6">6. What You Can Do Right Now (Even Before a Diagnosis)</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Waiting for appointments and evaluations can feel overwhelming. Here are concrete steps you can take today:
              </p>
              <ol className="list-decimal pl-6 space-y-4 text-lg text-gray-700">
                <li>
                  <strong>Track milestones</strong> &mdash; Download the CDC&rsquo;s free <a href="https://www.cdc.gov/act-early/milestones/index.html" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">Milestone Tracker app</a> and check off what your child is doing at each age.
                </li>
                <li>
                  <strong>Keep a journal</strong> &mdash; Note specific behaviors with dates, times, and context. This helps doctors and evaluators understand the full picture.
                </li>
                <li>
                  <strong>Contact Help Me Grow MN</strong> &mdash; Call 1-866-693-4769 or visit <a href="https://helpmegrowmn.org/" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">helpmegrowmn.org</a>. Services are free and available before a diagnosis.
                </li>
                <li>
                  <strong>Talk to daycare or preschool staff</strong> &mdash; Teachers see your child in a different context and may have valuable observations.
                </li>
                <li>
                  <strong>Start building routines</strong> &mdash; Consistent daily routines with visual schedules help all children feel more secure, especially those who may be on the spectrum.
                </li>
                <li>
                  <strong>Get on provider waitlists</strong> &mdash; ABA therapy providers often have waitlists. Reaching out early&mdash;even before a CMDE&mdash;means your child can start sooner once eligibility is established.
                </li>
                <li>
                  <strong>Connect with other families</strong> &mdash; The <a href="https://www.mnautism.org/" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">Autism Society of Minnesota (AUSM)</a> offers support groups, community events, and resources for families at every stage of the journey.
                </li>
              </ol>
            </section>

            <hr className="my-12 border-gray-300" />

            {/* Section 7 */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-raisin-black mb-6">7. Common Myths About Early Signs of Autism</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Misinformation can delay families from seeking help. Here are a few things we hear often&mdash;and the reality:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-raisin-black mb-2">&ldquo;Boys are just late talkers.&rdquo;</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    While boys do develop speech at slightly different rates, a consistent pattern of delayed communication combined with other signs warrants a screening. Autism is diagnosed in boys roughly <strong>four times more often</strong> than girls, partly because signs in girls are sometimes missed due to different presentation patterns. (<a href="https://www.cdc.gov/autism/signs-symptoms/" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">CDC</a>)
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-raisin-black mb-2">&ldquo;They&rsquo;ll grow out of it.&rdquo;</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Autism is a lifelong neurodevelopmental difference. With the right support, children can make significant progress in communication, behavior, and daily living skills&mdash;but the earlier that support begins, the more effective it tends to be. (<a href="https://ncbi.nlm.nih.gov/pmc/articles/PMC6034700/" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">Zwaigenbaum et al., 2015</a>)
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-raisin-black mb-2">&ldquo;My child makes eye contact, so it can&rsquo;t be autism.&rdquo;</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Eye contact varies widely among children with autism. Some children make eye contact sometimes; others make it frequently but miss other social cues. Autism is a spectrum, and no single sign rules it in or out.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-raisin-black mb-2">&ldquo;Getting a label will hurt my child.&rdquo;</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    A diagnosis isn&rsquo;t a label that limits your child&mdash;it&rsquo;s a key that unlocks services, school support, insurance coverage, and a deeper understanding of how your child learns and experiences the world. In Minnesota, a diagnosis opens the door to the <Link href="/eidbi" className="text-pacific-cyan hover:underline font-medium">EIDBI benefit</Link>, which can fund intensive, evidence-based therapy at no cost to qualifying families.
                  </p>
                </div>
              </div>
            </section>

            <hr className="my-12 border-gray-300" />

            {/* Section 8: FAQ */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-raisin-black mb-6">8. Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-raisin-black mb-2">At what age can autism be detected?</h3>
                  <p className="text-lg text-gray-700">
                    Autism can sometimes be identified as early as <strong>12&ndash;18 months</strong>, and the AAP recommends formal autism screening at 18 and 24 months. However, many children are not diagnosed until age 4 or later, which is why awareness of early signs is so important. (<a href="https://www.healthychildren.org/English/health-issues/conditions/Autism/Pages/How-Doctors-Screen-for-Autism.aspx" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">HealthyChildren.org</a>)
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-raisin-black mb-2">Do I need a referral to get my child screened in Minnesota?</h3>
                  <p className="text-lg text-gray-700">
                    No. You can request a screening from your pediatrician at any well-child visit. You can also contact <a href="https://helpmegrowmn.org/" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">Help Me Grow MN</a> directly&mdash;no referral or diagnosis is needed to access early intervention services through your local school district. (<a href="https://helpmegrowmn.org/HMG/GetHelpChild/HowRefer/index.html" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">Help Me Grow MN</a>)
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-raisin-black mb-2">What is the difference between screening and diagnosis?</h3>
                  <p className="text-lg text-gray-700">
                    <strong>Screening</strong> is a brief check (usually a questionnaire) that identifies children who may need a closer look. <strong>Diagnosis</strong> is a comprehensive evaluation by a specialist that determines whether a child meets the criteria for autism spectrum disorder. Screening is the first step&mdash;if it raises a flag, the next step is a diagnostic evaluation.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-raisin-black mb-2">How long does a diagnostic evaluation take in Minneapolis?</h3>
                  <p className="text-lg text-gray-700">
                    The evaluation itself typically takes a few hours to a full day, depending on the center. However, wait times to <em>schedule</em> an evaluation can range from several weeks to several months. Contact centers like Fraser, Children&rsquo;s Minnesota, or the University of Minnesota Autism Clinic early to get on the list.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-raisin-black mb-2">Can my child receive services before getting a formal diagnosis?</h3>
                  <p className="text-lg text-gray-700">
                    Yes. Minnesota&rsquo;s early intervention programs through Help Me Grow are available <strong>before a diagnosis</strong>. Additionally, some children may begin EIDBI services while diagnostic clarification is still underway, as long as medical necessity criteria are met through a CMDE. (<a href="https://www.dhs.state.mn.us/main/idcplg?IdcService=GET_DYNAMIC_CONVERSION&RevisionSelectionMethod=LatestReleased&dDocName=dhs16_195405" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">Minnesota DHS</a>)
                  </p>
                </div>
              </div>
            </section>

            <hr className="my-12 border-gray-300" />

            {/* Section 9: CTA */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-raisin-black mb-6">9. How Ability Avenues Can Help Your Family</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                If you&rsquo;re a parent in Minneapolis or the surrounding Twin Cities suburbs and you&rsquo;re noticing early signs that concern you, we want you to know: <strong>reaching out is the right move, even if you&rsquo;re not sure yet.</strong>
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                At Ability Avenues, we work with families every day who started right where you are&mdash;with a question, a gut feeling, or a concern from a teacher. Here&rsquo;s how we can support you:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700 mb-6">
                <li><strong>Answer your questions:</strong> We can talk through what you&rsquo;re seeing and help you understand next steps&mdash;no commitment required.</li>
                <li><strong>Guide you through the process:</strong> From screening to CMDE to starting ABA therapy, we know the Minnesota system inside and out.</li>
                <li><strong>Connect you with resources:</strong> Whether it&rsquo;s Help Me Grow, a diagnostic center, or the EIDBI benefit, we can point you in the right direction.</li>
                <li><strong>Get your child on our waitlist early:</strong> Starting the intake process sooner means less waiting once eligibility is confirmed.</li>
              </ul>
              <div className="bg-pacific-cyan/10 border-l-4 border-pacific-cyan p-6 mb-8 rounded-r-lg">
                <h3 className="text-xl font-bold text-raisin-black mb-4">Ready to Take the Next Step?</h3>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  You don&rsquo;t need a diagnosis to start a conversation. Reach out today:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                  <li><Link href="/contact" className="text-pacific-cyan hover:underline font-medium">Contact us</Link> to talk about your concerns</li>
                  <li><Link href="/referrals" className="text-pacific-cyan hover:underline font-medium">Submit a referral</Link> to start the intake process</li>
                  <li><Link href="/eidbi" className="text-pacific-cyan hover:underline font-medium">Learn about EIDBI services</Link> and how Minnesota funds ABA therapy</li>
                  <li>Explore our <Link href="/in-home-therapy" className="text-pacific-cyan hover:underline font-medium">in-home</Link> and <Link href="/center-based-therapy" className="text-pacific-cyan hover:underline font-medium">center-based</Link> ABA therapy options</li>
                </ul>
                <p className="text-lg text-gray-700 mt-4 leading-relaxed">
                  The best time to act is when you first notice something. Trust your instincts&mdash;and know that support is available.
                </p>
              </div>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default EarlySignsAutismPost;
