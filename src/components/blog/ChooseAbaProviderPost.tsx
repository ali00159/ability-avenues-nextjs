'use client';

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

const ChooseAbaProviderPost = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-white">
        <article className="max-w-4xl mx-auto px-4 pt-32 pb-12 md:pt-40 md:pb-16 lg:pt-48 lg:pb-20">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-raisin-black mb-6 leading-tight">
              How to Choose an ABA Therapy Provider in Minnesota: A Parent&rsquo;s Checklist
            </h1>
            <div className="flex flex-wrap gap-4 text-muted-foreground mb-8">
              <span className="text-base">Ability Avenues Team</span>
              <span>&bull;</span>
              <time dateTime="2026-03-13" className="text-base">March 13, 2026</time>
            </div>
          </header>

          <div className="mb-12">
            <Image
              src="/images/how-to-choose-a-provider-blog-cover.png"
              alt="How to choose the right ABA therapy provider in Minnesota — a checklist for parents"
              className="w-full h-auto rounded-xl object-cover"
              width={1200}
              height={630}
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none">
            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-raisin-black mb-6">1. Why Choosing the Right Provider Matters</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                You&rsquo;ve done the research. Your child has been evaluated, and ABA therapy has been recommended. Now comes a question that can feel just as overwhelming as everything that came before it: <em>&ldquo;How do I pick the right provider?&rdquo;</em>
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                It&rsquo;s a fair question&mdash;and an important one. The quality of ABA therapy varies significantly from provider to provider. A 2014 meta-analysis published in <em>Research in Autism Spectrum Disorders</em> found that treatment fidelity&mdash;how closely a program follows evidence-based protocols&mdash;is one of the strongest predictors of positive outcomes for children with autism. (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4320766/" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">Reichow et al., 2014 &mdash; NIH</a>)
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                In Minnesota, families have access to strong insurance protections and the <Link href="/eidbi" className="text-pacific-cyan hover:underline font-medium">EIDBI benefit</Link>, which means you have real choices. But more options also means more homework. This guide walks you through the key factors to consider&mdash;credentials, questions to ask, insurance, red flags, and Minnesota-specific resources&mdash;so you can make a confident decision for your family.
              </p>
              <blockquote className="border-l-4 border-pacific-cyan bg-pacific-cyan/10 p-6 my-8 rounded-r-lg">
                <p className="text-lg text-raisin-black italic">
                  The best ABA provider for your family isn&rsquo;t just the closest one or the one with the shortest waitlist. It&rsquo;s the one that treats your child as an individual and treats you as a partner.
                </p>
              </blockquote>
            </section>

            <hr className="my-12 border-gray-300" />

            {/* Section 2 */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-raisin-black mb-6">2. Start With Credentials: BCBA and RBT Explained</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Before anything else, verify that the provider employs properly credentialed staff. Two roles matter most in ABA therapy:
              </p>

              <h3 className="text-2xl font-bold text-raisin-black mb-4 mt-8">Board Certified Behavior Analyst (BCBA)</h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                A BCBA is the clinical lead of your child&rsquo;s ABA program. They hold a master&rsquo;s degree (or higher), have completed supervised fieldwork, and passed a national certification exam through the <a href="https://www.bacb.com/" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">Behavior Analyst Certification Board (BACB)</a>. The BCBA designs your child&rsquo;s treatment plan, sets goals, analyzes data, and oversees all sessions.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                According to the BACB, supervisors must complete a mandatory 8-hour supervision training and be certified for at least one year before overseeing other practitioners. (<a href="https://www.bacb.com/supervision-and-training" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">BACB &mdash; Supervision Requirements</a>)
              </p>

              <h3 className="text-2xl font-bold text-raisin-black mb-4 mt-8">Registered Behavior Technician (RBT)</h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                An RBT is the person who works directly with your child during therapy sessions. RBTs complete a 40-hour training program, pass a competency assessment, and must be supervised by a BCBA. They deliver the day-to-day intervention under the BCBA&rsquo;s direction. (<a href="https://www.bacb.com/rbt/" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">BACB &mdash; RBT Requirements</a>)
              </p>

              <p className="text-lg text-gray-700 mb-4 leading-relaxed font-semibold">
                What to verify:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                <li>The BCBA&rsquo;s certification is active&mdash;you can check on the <a href="https://www.bacb.com/services/o.php?page=101135" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">BACB Certificant Registry</a></li>
                <li>RBTs have current credentials and receive regular supervision</li>
                <li>The provider is enrolled as an EIDBI provider with Minnesota Health Care Programs (if using Medical Assistance)</li>
                <li>Staff pass background checks&mdash;required by Minnesota law for providers working with children</li>
              </ul>
            </section>

            <hr className="my-12 border-gray-300" />

            {/* Section 3 */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-raisin-black mb-6">3. Key Questions to Ask Every ABA Provider</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                When you&rsquo;re interviewing potential providers, come prepared. Here are the questions that matter most&mdash;and what good answers sound like:
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-raisin-black mb-2">&ldquo;How often does the BCBA supervise sessions?&rdquo;</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    <strong>Good answer:</strong> Weekly or biweekly, with direct observation of your child&rsquo;s sessions. The BACB requires ongoing supervision, and best practice means the BCBA isn&rsquo;t just reviewing data from a desk&mdash;they&rsquo;re watching sessions, modeling techniques, and adjusting the plan in real time. (<a href="https://www.bacb.com/supervision-and-training" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">BACB</a>)
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-raisin-black mb-2">&ldquo;How is my child&rsquo;s treatment plan developed?&rdquo;</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    <strong>Good answer:</strong> It starts with a thorough assessment of your child&rsquo;s skills, challenges, and interests. Goals are written based on what matters to your family&mdash;not a cookie-cutter template. The plan is reviewed and updated regularly (typically every 6 months or sooner).
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-raisin-black mb-2">&ldquo;How will you involve our family?&rdquo;</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    <strong>Good answer:</strong> Regular parent training sessions, shared progress reports, and collaborative goal-setting. Research consistently shows that parent involvement is one of the strongest predictors of ABA therapy success. (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7265021/" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">Crone &amp; Mehta, 2016 &mdash; NIH</a>)
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-raisin-black mb-2">&ldquo;What does a typical session look like?&rdquo;</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    <strong>Good answer:</strong> A mix of structured teaching and naturalistic play-based learning, tailored to your child&rsquo;s age and needs. Sessions should feel engaging and positive&mdash;not like drills.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-raisin-black mb-2">&ldquo;How do you handle challenging behaviors?&rdquo;</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    <strong>Good answer:</strong> Through functional assessment&mdash;understanding <em>why</em> a behavior happens&mdash;and teaching replacement skills. The provider should never use punishment, restraint, or aversive techniques.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-raisin-black mb-2">&ldquo;What is your staff turnover rate?&rdquo;</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    <strong>Why it matters:</strong> High turnover means your child repeatedly has to build trust with new therapists, which can slow progress. Ask how the provider supports staff retention through training, compensation, and career growth.
                  </p>
                </div>
              </div>
            </section>

            <hr className="my-12 border-gray-300" />

            {/* Section 4 */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-raisin-black mb-6">4. Understanding Insurance and EIDBI Coverage in Minnesota</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Minnesota families have some of the strongest insurance protections for autism services in the country. Here&rsquo;s what you need to know:
              </p>

              <h3 className="text-2xl font-bold text-raisin-black mb-4 mt-8">Minnesota Autism Insurance Mandate</h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Under <a href="https://www.revisor.mn.gov/statutes/cite/62A.3094" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">Minnesota Statute 62A.3094</a>, large employer health plans must cover medically necessary autism services for children under 18, including ABA therapy, speech therapy, and occupational therapy.
              </p>

              <h3 className="text-2xl font-bold text-raisin-black mb-4 mt-8">EIDBI Through Medical Assistance</h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                If your family is enrolled in Medical Assistance (MA), MinnesotaCare, or MA-TEFRA, the <Link href="/eidbi" className="text-pacific-cyan hover:underline font-medium">EIDBI benefit</Link> covers intensive ABA therapy and related services at no cost. EIDBI is available for children and young adults under 21 who meet medical necessity criteria through a Comprehensive Multi-Disciplinary Evaluation (CMDE). (<a href="https://www.dhs.state.mn.us/main/idcplg?IdcService=GET_DYNAMIC_CONVERSION&RevisionSelectionMethod=LatestReleased&dDocName=dhs16_195658" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">Minnesota DHS</a>)
              </p>

              <p className="text-lg text-gray-700 mb-4 leading-relaxed font-semibold">
                Before you sign with a provider, confirm:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 mb-6">
                <li>They accept your specific insurance plan</li>
                <li>They are enrolled as an EIDBI provider (if using MA/MinnesotaCare/TEFRA)</li>
                <li>Whether prior authorization is required and who handles the paperwork</li>
                <li>Whether there are any caps on hours or sessions per year</li>
                <li>What out-of-pocket costs, if any, you should expect</li>
              </ul>

              <blockquote className="border-l-4 border-pacific-cyan bg-pacific-cyan/10 p-6 my-8 rounded-r-lg">
                <p className="text-lg text-raisin-black italic">
                  <strong>Tip:</strong> Ask the provider if they will handle insurance authorization for you. Many providers manage this process so you don&rsquo;t have to navigate it alone. The Minnesota Autism Portal at <a href="https://mn.gov/autism/financial-assistance-resources/health-care-coverage" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">mn.gov/autism</a> also has a helpful overview of coverage options.
                </p>
              </blockquote>
            </section>

            <hr className="my-12 border-gray-300" />

            {/* Section 5 */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-raisin-black mb-6">5. In-Home, Center-Based, or Both? Matching the Setting to Your Family</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                One of the first decisions you&rsquo;ll face is <em>where</em> therapy happens. Most ABA providers in Minnesota offer one or both of these options:
              </p>

              <h3 className="text-2xl font-bold text-raisin-black mb-4 mt-8">In-Home ABA Therapy</h3>
              <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 mb-4">
                <li>Therapist comes to your home (or daycare, community setting)</li>
                <li>Skills are taught in the environment where your child actually uses them</li>
                <li>More convenient for families with young children or complex schedules</li>
                <li>Less social interaction with peers compared to center-based</li>
              </ul>

              <h3 className="text-2xl font-bold text-raisin-black mb-4 mt-8">Center-Based ABA Therapy</h3>
              <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 mb-4">
                <li>Sessions happen at a dedicated therapy clinic</li>
                <li>Structured environment designed for learning</li>
                <li>Opportunities for socialization with other children</li>
                <li>Closer BCBA supervision (the clinical team is typically on-site)</li>
              </ul>

              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Many families find that a <strong>hybrid approach</strong>&mdash;some sessions in-home and some at a center&mdash;gives their child the best of both worlds. We wrote a detailed comparison in our post on <Link href="/blog/in-home-vs-center-based-aba-minneapolis" className="text-pacific-cyan hover:underline font-medium">in-home vs. center-based ABA therapy</Link> if you&rsquo;d like to explore this further.
              </p>

              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                When evaluating a provider, ask whether they offer both settings and how flexible they are if your family&rsquo;s needs change over time.
              </p>
            </section>

            <hr className="my-12 border-gray-300" />

            {/* Section 6 */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-raisin-black mb-6">6. Red Flags to Watch For</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Not all ABA providers are created equal. As you evaluate your options, watch for these warning signs:
              </p>

              <ul className="list-disc pl-6 space-y-4 text-lg text-gray-700 mb-6">
                <li>
                  <strong>No individualized assessment.</strong> If a provider starts therapy without conducting a thorough assessment of your child&rsquo;s skills, needs, and preferences, that&rsquo;s a problem. A functional behavior assessment should always come before treatment. (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4320766/" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">Reichow et al., 2014 &mdash; NIH</a>)
                </li>
                <li>
                  <strong>Cookie-cutter goals.</strong> If the treatment plan looks generic&mdash;the same goals for every child regardless of age, ability, or family priorities&mdash;the provider may not be tailoring care appropriately.
                </li>
                <li>
                  <strong>Little or no BCBA involvement.</strong> If the BCBA rarely observes sessions or isn&rsquo;t available to discuss your child&rsquo;s progress, ask why. Regular supervision is essential for quality care.
                </li>
                <li>
                  <strong>Punitive or aversive methods.</strong> Any approach that involves punishment, restraint, withholding food, or forcing compliance through distress has no place in modern, ethical ABA therapy. (<a href="https://www.bacb.com/ethics-information/" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">BACB Ethics Code</a>)
                </li>
                <li>
                  <strong>Suppressing harmless self-stimulatory behaviors.</strong> If a provider&rsquo;s primary goal is to eliminate stimming that isn&rsquo;t harmful, that&rsquo;s a red flag. Ethical ABA focuses on building skills and quality of life, not making children &ldquo;look typical.&rdquo;
                </li>
                <li>
                  <strong>No data or progress updates.</strong> ABA is a data-driven science. If the provider can&rsquo;t show you clear, measurable progress reports, you don&rsquo;t have enough information to know if therapy is working.
                </li>
                <li>
                  <strong>Parents are excluded.</strong> If you&rsquo;re not invited to participate in goal-setting, observe sessions, or receive parent training, the provider is missing a critical part of effective ABA.
                </li>
              </ul>

              <blockquote className="border-l-4 border-pacific-cyan bg-pacific-cyan/10 p-6 my-8 rounded-r-lg">
                <p className="text-lg text-raisin-black italic">
                  Trust your instincts. If something doesn&rsquo;t feel right&mdash;if your child seems consistently distressed, if your questions go unanswered, or if you feel shut out of the process&mdash;it&rsquo;s okay to seek a different provider. Your child deserves care that respects their dignity and supports their growth.
                </p>
              </blockquote>
            </section>

            <hr className="my-12 border-gray-300" />

            {/* Section 7 */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-raisin-black mb-6">7. Minnesota Resources for Finding ABA Providers</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                When you&rsquo;re ready to start your search, these Minnesota-specific resources can help you find qualified ABA therapy providers in the Twin Cities and beyond:
              </p>

              <ul className="list-disc pl-6 space-y-4 text-lg text-gray-700">
                <li>
                  <strong>Minnesota Autism Portal:</strong> The state&rsquo;s <a href="https://mn.gov/autism/" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">mn.gov/autism</a> website lists EIDBI providers and has tools to search for services by location and type.
                </li>
                <li>
                  <strong>Minnesota Association for Behavior Analysis (MNABA):</strong> The <a href="https://www.mnaba.org/" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">MNABA provider directory</a> lists credentialed behavior analysts and ABA service providers across the state.
                </li>
                <li>
                  <strong>BACB Certificant Registry:</strong> The <a href="https://www.bacb.com/services/o.php?page=101135" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">BACB registry</a> lets you verify that a specific BCBA&rsquo;s certification is active and in good standing.
                </li>
                <li>
                  <strong>Your Insurance Company:</strong> Call the member services number on your insurance card and ask for a list of in-network ABA therapy providers in your area.
                </li>
                <li>
                  <strong>Your Child&rsquo;s Pediatrician or CMDE Provider:</strong> They often have relationships with local ABA providers and can offer informed recommendations based on your child&rsquo;s needs.
                </li>
                <li>
                  <strong>Autism Society of Minnesota (AuSM):</strong> <a href="https://www.mnautism.org/" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">AuSM</a> maintains resource lists and can connect you with other families who have navigated the provider search.
                </li>
              </ul>
            </section>

            <hr className="my-12 border-gray-300" />

            {/* Section 8: FAQ */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-raisin-black mb-6">8. Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-raisin-black mb-2">How many hours of ABA therapy does my child need per week?</h3>
                  <p className="text-lg text-gray-700">
                    This depends entirely on your child&rsquo;s needs. Some children benefit from 10&ndash;15 hours per week, while others may receive 25&ndash;40 hours for more intensive support. The recommended hours are determined by the BCBA&rsquo;s assessment and your child&rsquo;s CMDE (if using EIDBI). Research shows that more intensive programs&mdash;typically 25+ hours per week&mdash;tend to produce the strongest outcomes for young children. (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4320766/" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">Reichow et al., 2014 &mdash; NIH</a>)
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-raisin-black mb-2">Can I switch ABA providers if it&rsquo;s not working?</h3>
                  <p className="text-lg text-gray-700">
                    Yes. You always have the right to change providers. If you&rsquo;re on EIDBI, your CMDE and treatment plan carry over&mdash;you don&rsquo;t have to start the evaluation process from scratch. Let your new provider know so they can request records and continue where you left off.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-raisin-black mb-2">How long are ABA provider waitlists in Minneapolis?</h3>
                  <p className="text-lg text-gray-700">
                    Waitlists vary by provider and can range from a few weeks to several months. We strongly recommend contacting providers early&mdash;even before your CMDE is complete&mdash;so your child&rsquo;s name is on the list. Many providers will begin the intake process while you wait for evaluation results.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-raisin-black mb-2">Do I need a referral from my pediatrician to start ABA?</h3>
                  <p className="text-lg text-gray-700">
                    It depends on your insurance. Some plans require a physician referral or prior authorization, while others allow you to contact an ABA provider directly. For EIDBI, the key requirement is a completed CMDE that establishes medical necessity. (<a href="https://mn.gov/dhs/partners-and-providers/news-initiatives-reports-workgroups/long-term-services-and-supports/eidbi/eidbi.jsp" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">mn.gov &mdash; EIDBI</a>)
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-raisin-black mb-2">What is the difference between a BCBA and a BCaBA?</h3>
                  <p className="text-lg text-gray-700">
                    A <strong>BCBA</strong> holds a master&rsquo;s degree and can independently design and supervise ABA programs. A <strong>BCaBA</strong> (Board Certified Assistant Behavior Analyst) holds a bachelor&rsquo;s degree and works under the supervision of a BCBA. Both are credentialed by the BACB, but the BCBA is the clinical lead responsible for your child&rsquo;s treatment plan. (<a href="https://www.bacb.com/" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">BACB</a>)
                  </p>
                </div>
              </div>
            </section>

            <hr className="my-12 border-gray-300" />

            {/* Section 9: CTA */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-raisin-black mb-6">9. How Ability Avenues Can Help Your Family</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                If you&rsquo;re a parent in Minneapolis or the surrounding Twin Cities suburbs searching for an ABA therapy provider, we know the process can feel like a lot. We built Ability Avenues to make it easier.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Here&rsquo;s what working with us looks like:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700 mb-6">
                <li><strong>BCBA-led, individualized care:</strong> Every child&rsquo;s program is designed and supervised by a Board Certified Behavior Analyst who gets to know your child and your family.</li>
                <li><strong>Flexible settings:</strong> We offer both <Link href="/in-home-therapy" className="text-pacific-cyan hover:underline font-medium">in-home ABA therapy</Link> and <Link href="/center-based-therapy" className="text-pacific-cyan hover:underline font-medium">center-based ABA therapy</Link>, plus hybrid models that adapt as your child grows.</li>
                <li><strong>EIDBI enrolled:</strong> We&rsquo;re an enrolled <Link href="/eidbi" className="text-pacific-cyan hover:underline font-medium">EIDBI provider</Link>, which means families on Medical Assistance, MinnesotaCare, or MA-TEFRA can access our services at no cost.</li>
                <li><strong>Parent partnership:</strong> Regular parent training, transparent data sharing, and collaborative goal-setting are built into every program.</li>
                <li><strong>Insurance navigation:</strong> Our team helps with authorization paperwork so you can focus on your child.</li>
              </ul>
              <div className="bg-pacific-cyan/10 border-l-4 border-pacific-cyan p-6 mb-8 rounded-r-lg">
                <h3 className="text-xl font-bold text-raisin-black mb-4">Ready to Take the Next Step?</h3>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Whether you&rsquo;re just starting your search or comparing your final options, we&rsquo;re happy to answer your questions&mdash;no commitment required.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                  <li><Link href="/contact" className="text-pacific-cyan hover:underline font-medium">Contact us</Link> to talk about your family&rsquo;s needs</li>
                  <li><Link href="/referrals" className="text-pacific-cyan hover:underline font-medium">Submit a referral</Link> to start the intake process</li>
                  <li><Link href="/eidbi" className="text-pacific-cyan hover:underline font-medium">Learn about EIDBI services</Link> and how Minnesota funds ABA therapy</li>
                  <li>Read our guide on <Link href="/blog/what-is-eidbi-minnesota" className="text-pacific-cyan hover:underline font-medium">what EIDBI is in Minnesota</Link></li>
                  <li>Compare <Link href="/blog/in-home-vs-center-based-aba-minneapolis" className="text-pacific-cyan hover:underline font-medium">in-home vs. center-based ABA</Link> to find the right fit</li>
                </ul>
                <p className="text-lg text-gray-700 mt-4 leading-relaxed">
                  Choosing a provider is a big decision&mdash;and you don&rsquo;t have to make it alone.
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

export default ChooseAbaProviderPost;
