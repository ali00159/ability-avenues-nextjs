'use client';

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

const WhatIsEidbiPost = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-white">
        <article className="max-w-4xl mx-auto px-4 pt-32 pb-12 md:pt-40 md:pb-16 lg:pt-48 lg:pb-20">
          {/* Hero Section */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-raisin-black mb-6 leading-tight">
              What Is EIDBI in Minnesota? A Plain-English Guide for Minneapolis Families
            </h1>
            <div className="flex flex-wrap gap-4 text-muted-foreground mb-8">
              <span className="text-base">Ability Avenues Team</span>
              <span>•</span>
              <time dateTime="2025-01-15" className="text-base">January 15, 2025</time>
            </div>
          </header>

          {/* Hero Image */}
          <div className="mb-12">
            <Image
              src="/images/what-is-eidbi-blog.jpg"
              alt="What Is EIDBI in Minnesota? A Plain-English Guide for Minneapolis Families"
              className="w-full h-auto rounded-xl object-cover"
              width={1200}
              height={630}
              priority
            />
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            {/* Section 1: Why EIDBI Matters */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-raisin-black mb-6">1. Why Minnesota's EIDBI Program Matters for Your Family</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                If your child has autism or a related developmental condition and you live in Minneapolis or the surrounding suburbs, you may hear people mention <strong>"EIDBI."</strong>
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                That acronym can feel like one more confusing thing on an already overwhelming journey. But understanding EIDBI is important, because it's often the <strong>main way families in Minnesota get intensive autism services paid for through Medical Assistance and related programs.</strong> (<a href="https://www.dhs.state.mn.us/main/idcplg?IdcService=GET_DYNAMIC_CONVERSION&RevisionSelectionMethod=LatestReleased&dDocName=dhs16_195658" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">Minnesota Department of Human Services</a>)
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                This guide is written for parents and caregivers. No legalese, no insurance jargon—just a clear explanation of:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                <li>What EIDBI is</li>
                <li>Who qualifies</li>
                <li>What services it covers</li>
                <li>How it fits with ABA therapy and other supports</li>
                <li>What to do next if you think your child may be eligible</li>
              </ul>
            </section>

            <hr className="my-12 border-gray-300" />

            {/* Section 2: What Is EIDBI */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-raisin-black mb-6">2. What Is EIDBI?</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                <strong>EIDBI</strong> stands for <strong>Early Intensive Developmental and Behavioral Intervention.</strong>
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                It's a <strong>Minnesota-specific health benefit</strong> that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 mb-4">
                <li>Provides <strong>medically necessary therapy and supports</strong> for children, youth, and young adults <strong>under age 21</strong></li>
                <li>Is designed for kids with <strong>autism spectrum disorder (ASD) or related conditions</strong></li>
                <li>Is paid for through <strong>Medical Assistance (MA), MinnesotaCare, MA-TEFRA, or other qualifying programs</strong> (<a href="https://www.dhs.state.mn.us/main/idcplg?IdcService=GET_DYNAMIC_CONVERSION&RevisionSelectionMethod=LatestReleased&dDocName=dhs16_195658" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">Minnesota Department of Human Services</a>)</li>
              </ul>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                State law authorizes EIDBI to cover three big areas:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-lg text-gray-700 mb-4">
                <li>A <strong>comprehensive evaluation</strong> to determine needs</li>
                <li><strong>Ongoing progress monitoring</strong></li>
                <li><strong>Early intensive treatment</strong> for autism or related conditions (<a href="https://www.revisor.mn.gov/statutes/cite/256B.0949" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">MN Revisor's Office</a>)</li>
              </ol>
              <blockquote className="border-l-4 border-pacific-cyan bg-pacific-cyan/10 p-6 my-8 rounded-r-lg">
                <p className="text-lg text-raisin-black italic">
                  Put simply: <strong>EIDBI is Minnesota's way of making sure kids with autism and related conditions can access intensive, evidence-based support—and that families aren't left to figure it out alone.</strong>
                </p>
              </blockquote>
            </section>

            <hr className="my-12 border-gray-300" />

            {/* Section 3: Who Can Get EIDBI */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-raisin-black mb-6">3. Who Can Get EIDBI? (Eligibility in Plain Language)</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                According to the Minnesota Department of Human Services (DHS), a child or young adult is eligible for EIDBI if they meet <strong>all</strong> of the following: (<a href="https://www.dhs.state.mn.us/main/idcplg?IdcService=GET_DYNAMIC_CONVERSION&RevisionSelectionMethod=LatestReleased&dDocName=dhs16_195213" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">Minnesota Department of Human Services</a>)
              </p>
              <ol className="list-decimal pl-6 space-y-4 text-lg text-gray-700 mb-4">
                <li>
                  <strong>Age:</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Younger than <strong>21 years old</strong></li>
                  </ul>
                </li>
                <li>
                  <strong>Diagnosis:</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Has a diagnosis of <strong>autism spectrum disorder (ASD)</strong> or a <strong>closely related developmental condition</strong> (for example, developmental conditions that impact communication, learning, and daily living in ways similar to autism)</li>
                  </ul>
                </li>
                <li>
                  <strong>Evaluation (CMDE):</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Has had a <strong>Comprehensive Multi-Disciplinary Evaluation (CMDE)</strong> that shows EIDBI services are <strong>medically necessary</strong></li>
                  </ul>
                </li>
                <li>
                  <strong>Insurance/coverage:</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Is enrolled in a qualifying health program such as:
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li><strong>Medical Assistance (MA)</strong></li>
                        <li><strong>MinnesotaCare</strong></li>
                        <li><strong>MA-TEFRA</strong></li>
                        <li>Or another qualifying Minnesota Health Care Programs plan (<a href="https://mn.gov/dhs/partners-and-providers/news-initiatives-reports-workgroups/long-term-services-and-supports/eidbi/eidbi.jsp" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">mn.gov // Minnesota's State Portal</a>)</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ol>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed font-semibold">
                Who can make a referral?
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Anyone—<strong>you as the parent, a pediatrician, school staff, a case manager, or another provider</strong>—can refer a child for EIDBI services or for a CMDE to see if they qualify. (<a href="https://mn.gov/dhs/partners-and-providers/news-initiatives-reports-workgroups/long-term-services-and-supports/eidbi/eidbi.jsp" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">mn.gov // Minnesota's State Portal</a>)
              </p>
            </section>

            <hr className="my-12 border-gray-300" />

            {/* Section 4: What Services Does EIDBI Cover */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-raisin-black mb-6">4. What Services Does EIDBI Cover?</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                EIDBI isn't just one type of therapy. It's a <strong>bundle of services</strong> designed to surround your child and family with coordinated support. DHS and Minnesota health plans describe the following as covered EIDBI services: (<a href="https://www.co.itasca.mn.us/DocumentCenter/View/6318/Early-Intensive-Developmental-and-Behavioral-Intervention-PDF-Updated-10132025" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">co.itasca.mn.us</a>)
              </p>

              <div className="space-y-8">
                {/* 4.1 CMDE */}
                <div>
                  <h3 className="text-2xl font-bold text-raisin-black mb-4">4.1 CMDE – Comprehensive Multi-Disciplinary Evaluation</h3>
                  <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                    <li>The <strong>starting point</strong> for EIDBI</li>
                    <li>Looks at your child's development, behavior, communication, daily living skills, and more</li>
                    <li>Determines <strong>medical necessity</strong> and helps confirm diagnosis</li>
                    <li>Forms the foundation for the treatment plan (ITP)</li>
                  </ul>
                  <p className="text-lg text-gray-700 mt-4 italic leading-relaxed">
                    (You already have a full CMDE blog on deck; you can internally link to it here.)
                  </p>
                </div>

                {/* 4.2 ITP */}
                <div>
                  <h3 className="text-2xl font-bold text-raisin-black mb-4">4.2 ITP – Individual Treatment Plan Development & Progress Monitoring</h3>
                  <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                    <li>After the CMDE, a qualified provider writes an <strong>Individual Treatment Plan (ITP)</strong></li>
                    <li>Includes <strong>goals</strong>, recommended <strong>services and hours</strong>, and how progress will be measured</li>
                    <li>Must be updated regularly (for example, every 6 months) so your child's care keeps pace as they grow and change (<a href="https://www.dhs.state.mn.us/main/idcplg?IdcService=GET_DYNAMIC_CONVERSION&RevisionSelectionMethod=LatestReleased&dDocName=dhs-292814" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">Minnesota Department of Human Services</a>)</li>
                  </ul>
                </div>

                {/* 4.3 Intervention */}
                <div>
                  <h3 className="text-2xl font-bold text-raisin-black mb-4">4.3 Intervention – Individual, Group, and Higher-Intensity</h3>
                  <p className="text-lg text-gray-700 mb-3 leading-relaxed">
                    This is the "therapy time" most parents picture. Under EIDBI, intervention can include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 mb-3">
                    <li><strong>Individual intervention:</strong> One-on-one work with your child (often based in ABA and developmental approaches, depending on provider)</li>
                    <li><strong>Group intervention:</strong> Small-group settings to practice social skills, play, and daily routines</li>
                    <li><strong>Higher-intensity intervention:</strong> More hours and clinical oversight when a child has <strong>significant needs</strong>, often early in the therapy journey (<a href="https://www.co.itasca.mn.us/DocumentCenter/View/6318/Early-Intensive-Developmental-and-Behavioral-Intervention-PDF-Updated-10132025" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">co.itasca.mn.us</a>)</li>
                  </ul>
                  <p className="text-lg text-gray-700 mb-3 leading-relaxed">
                    Intervention can happen:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                    <li><strong>In-home</strong></li>
                    <li>In a <strong>center or clinic</strong></li>
                    <li>In the <strong>community</strong> (for example, daycare, playground, or other natural settings)</li>
                    <li>Sometimes via <strong>telehealth</strong>, when appropriate (<a href="https://www.senate.mn/committees/2025-2026/3126_Committee_on_Human_Services/Human_20250203_DHS-EIDBI-Licensing-Report-2025.pdf" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">Minnesota Senate</a>)</li>
                  </ul>
                </div>

                {/* 4.4 Observation and Direction */}
                <div>
                  <h3 className="text-2xl font-bold text-raisin-black mb-4">4.4 Observation and Direction</h3>
                  <p className="text-lg text-gray-700 mb-3 leading-relaxed">
                    This service covers the <strong>clinical oversight</strong> behind the scenes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                    <li>A qualified professional (like a BCBA or other approved EIDBI provider)</li>
                    <li><strong>Observes</strong> sessions, reviews data, and adjusts strategies</li>
                    <li>Provides <strong>direction</strong> and coaching to the front-line technicians or therapists delivering one-on-one support (<a href="https://www.dhs.state.mn.us/EIDBI-ObservationandDirection/" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">Minnesota Department of Human Services</a>)</li>
                  </ul>
                  <p className="text-lg text-gray-700 mt-3 leading-relaxed">
                    Parents don't always see this happening directly, but it's what keeps therapy individualized and effective.
                  </p>
                </div>

                {/* 4.5 Family/Caregiver Training */}
                <div>
                  <h3 className="text-2xl font-bold text-raisin-black mb-4">4.5 Family/Caregiver Training and Counseling</h3>
                  <p className="text-lg text-gray-700 mb-3 leading-relaxed">
                    One of the most powerful parts of EIDBI is that it <strong>supports you, not just your child.</strong>
                  </p>
                  <p className="text-lg text-gray-700 mb-3 leading-relaxed">
                    Family/caregiver training and counseling is designed to: (<a href="https://www.dhs.state.mn.us/main/idcplg?IdcService=GET_DYNAMIC_CONVERSION&RevisionSelectionMethod=LatestReleased&dDocName=DHS16_195340" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">Minnesota Department of Human Services</a>)
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                    <li>Teach you <strong>strategies</strong> to use at home (communication, behavior supports, daily routines)</li>
                    <li>Help you understand your child's <strong>strengths, sensory needs, and learning style</strong></li>
                    <li>Offer space to ask questions and problem-solve real-life situations (bedtime, mealtimes, transitions, community outings)</li>
                  </ul>
                  <p className="text-lg text-gray-700 mt-3 leading-relaxed">
                    These services can be <strong>individual or group-based</strong> and may be provided in person or via telehealth.
                  </p>
                </div>

                {/* 4.6 Coordinated Care Conference */}
                <div>
                  <h3 className="text-2xl font-bold text-raisin-black mb-4">4.6 Coordinated Care Conference</h3>
                  <p className="text-lg text-gray-700 mb-3 leading-relaxed">
                    Kids with autism and related conditions often have several helpers: school, speech therapy, case management, ABA, medical providers, and more.
                  </p>
                  <p className="text-lg text-gray-700 mb-3 leading-relaxed">
                    A <strong>coordinated care conference</strong> brings parts of the team together to: (<a href="https://www.dhs.state.mn.us/EIDBI-CoordinatedCareConference/" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">Minnesota Department of Human Services</a>)
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                    <li>Review the treatment plan</li>
                    <li>Share updates and concerns</li>
                    <li>Align goals across school, clinic, and home</li>
                  </ul>
                  <p className="text-lg text-gray-700 mt-3 leading-relaxed">
                    This meeting is optional but can reduce mixed messages and make your child's day more consistent.
                  </p>
                </div>

                {/* 4.7 Telehealth and Travel Time */}
                <div>
                  <h3 className="text-2xl font-bold text-raisin-black mb-4">4.7 Telehealth and Travel Time</h3>
                  <p className="text-lg text-gray-700 mb-3 leading-relaxed">
                    EIDBI also recognizes that families live in real-world Minnesota conditions—snow, distance, work schedules.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                    <li>Certain services (like CMDE, family training, some intervention sessions, ITP updates, and observation/direction) can be provided via <strong>telehealth</strong> when clinically appropriate (<a href="https://www.senate.mn/committees/2025-2026/3126_Committee_on_Human_Services/Human_20250203_DHS-EIDBI-Licensing-Report-2025.pdf" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">Minnesota Senate</a>)</li>
                    <li><strong>Travel time</strong> may be covered when a provider drives to your home or a community setting to deliver services (not just to their own clinic) (<a href="https://www.senate.mn/committees/2025-2026/3126_Committee_on_Human_Services/Human_20250203_DHS-EIDBI-Licensing-Report-2025.pdf" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">Minnesota Senate</a>)</li>
                  </ul>
                </div>
              </div>
            </section>

            <hr className="my-12 border-gray-300" />

            {/* Section 5: How EIDBI Connects to ABA */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-raisin-black mb-6">5. How EIDBI Connects to ABA Therapy in Minnesota</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                A lot of families ask:
              </p>
              <blockquote className="border-l-4 border-pacific-cyan bg-pacific-cyan/10 p-6 my-8 rounded-r-lg">
                <p className="text-lg text-raisin-black italic">
                  "Is EIDBI the same as ABA?"
                </p>
              </blockquote>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Not exactly—but they often <strong>work together.</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 mb-4">
                <li><strong>EIDBI</strong> is the <strong>insurance benefit / funding framework</strong> created by Minnesota law. (<a href="https://www.revisor.mn.gov/statutes/cite/256B.0949" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">MN Revisor's Office</a>)</li>
                <li><strong>ABA therapy</strong> (Applied Behavior Analysis) is <strong>one type of clinical approach</strong> commonly used within EIDBI intervention services.</li>
              </ul>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Under EIDBI, providers can use evidence-based behavioral and developmental approaches (including ABA) to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 mb-4">
                <li>Build communication, play, and social skills</li>
                <li>Support daily living skills (dressing, feeding, toileting)</li>
                <li>Reduce behaviors that are unsafe or that get in the way of learning and participation</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                The benefit also emphasizes <strong>family training, long-term quality of life, and community participation</strong>—not just clinic-based goals. (<a href="https://mnscha.org/wp-content/uploads/Ch36_03022022.pdf" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">Minnesota Chiropractic School</a>)
              </p>
            </section>

            <hr className="my-12 border-gray-300" />

            {/* Section 6: Day-to-Day in Minneapolis */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-raisin-black mb-6">6. What This Looks Like Day-to-Day in Minneapolis & the Twin Cities</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Every child's plan is different, but here's a common pattern we see with families in Minneapolis, Bloomington, Eden Prairie, and surrounding suburbs:
              </p>
              <ol className="list-decimal pl-6 space-y-4 text-lg text-gray-700">
                <li>
                  <strong>Concern & referral</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Parent, pediatrician, or school staff notices ongoing challenges (communication, behavior, social play, daily living).</li>
                    <li>A referral is made for a <strong>CMDE</strong> and possibly other evaluations.</li>
                  </ul>
                </li>
                <li>
                  <strong>CMDE & eligibility</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>A CMDE provider completes the comprehensive evaluation.</li>
                    <li>If EIDBI criteria are met, medical necessity is documented and submitted.</li>
                  </ul>
                </li>
                <li>
                  <strong>Choosing a provider & writing the ITP</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Family selects an EIDBI provider (<Link href="/in-home-therapy" className="text-pacific-cyan hover:underline font-medium">in-home</Link>, <Link href="/center-based-therapy" className="text-pacific-cyan hover:underline font-medium">center-based</Link>, or hybrid).</li>
                    <li>A qualified provider writes the <strong>Individual Treatment Plan</strong> based on CMDE findings and parent priorities.</li>
                  </ul>
                </li>
                <li>
                  <strong>Starting intervention</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Sessions might happen <strong>in your home</strong>, in a <strong>clinic</strong>, or a mix.</li>
                    <li>Hours per week depend on your child's needs, your schedule, and the plan.</li>
                  </ul>
                </li>
                <li>
                  <strong>Ongoing family training</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Parents/caregivers meet regularly with the clinical team to practice strategies, get coaching, and adjust goals.</li>
                  </ul>
                </li>
                <li>
                  <strong>Progress reviews & updates</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>The team tracks data, reviews progress, and updates the ITP.</li>
                    <li>The CMDE is updated at least every <strong>three years</strong>, or sooner if needed. (<a href="https://www.dhs.state.mn.us/main/idcplg?IdcService=GET_DYNAMIC_CONVERSION&RevisionSelectionMethod=LatestReleased&dDocName=dhs-292814" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">Minnesota Department of Human Services</a>)</li>
                  </ul>
                </li>
              </ol>
            </section>

            <hr className="my-12 border-gray-300" />

            {/* Section 7: How Parents Can Advocate */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-raisin-black mb-6">7. How Parents Can Advocate Within the EIDBI System</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Here are practical ways to stay in the driver's seat:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700">
                <li><strong>Ask about EIDBI specifically.</strong> When you call a provider, ask: "Are you an enrolled EIDBI provider with Minnesota Health Care Programs?"</li>
                <li><strong>Request a CMDE if you don't have one.</strong> Ask your pediatrician or potential therapy provider how to schedule a CMDE to determine medical necessity.</li>
                <li><strong>Bring your priorities to the table.</strong> Before meetings, write down 2–3 top goals (for example, "more independent toileting," "safer behavior in public," "using words or a device to ask for help").</li>
                <li><strong>Review your ITP.</strong> Make sure the plan reflects <strong>your child's real life</strong>: daycare/school schedule, home routines, cultural practices, language, and family values. Minnesota policy explicitly says services must be person- and family-centered. (<a href="https://www.dhs.state.mn.us/main/idcplg?IdcService=GET_DYNAMIC_CONVERSION&RevisionSelectionMethod=LatestReleased&dDocName=dhs16_195658" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">Minnesota Department of Human Services</a>)</li>
                <li><strong>Keep copies of key documents.</strong> Store your CMDE, ITPs, progress reports, and school IEPs in one folder (paper or digital). This makes it easier to move between providers or appeal coverage decisions if needed.</li>
              </ul>
            </section>

            <hr className="my-12 border-gray-300" />

            {/* Section 8: FAQs */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-raisin-black mb-6">8. FAQs About EIDBI for Minnesota Families</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-raisin-black mb-2">Q1: Does my child need an official autism diagnosis to get EIDBI?</h3>
                  <p className="text-lg text-gray-700">
                    Usually, yes—but there are situations (especially for very young children) where a child may not have a formal ASD diagnosis yet and still meet <strong>medical necessity criteria</strong> for EIDBI while that evaluation is being clarified. Talk with your CMDE provider about your child's situation. (<a href="https://www.dhs.state.mn.us/main/idcplg?IdcService=GET_DYNAMIC_CONVERSION&RevisionSelectionMethod=LatestReleased&dDocName=dhs16_195405" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">Minnesota Department of Human Services</a>)
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-raisin-black mb-2">Q2: Is EIDBI only for little kids?</h3>
                  <p className="text-lg text-gray-700">
                    No. EIDBI is available for people <strong>under age 21.</strong> Many services are focused on early childhood, but older children and youth can also qualify and benefit from developmentally appropriate goals (daily living skills, community participation, transition skills). (<a href="https://mn.gov/dhs/partners-and-providers/news-initiatives-reports-workgroups/long-term-services-and-supports/eidbi/eidbi.jsp" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">mn.gov // Minnesota's State Portal</a>)
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-raisin-black mb-2">Q3: Can we use EIDBI if we already get school services or waiver services?</h3>
                  <p className="text-lg text-gray-700">
                    Yes. EIDBI is a <strong>medical benefit</strong>, while school services are <strong>educational</strong> and waivers are <strong>home- and community-based supports.</strong> They can work together, as long as the same service isn't billed twice for the same time. Coordination is important, which is where <strong>coordinated care conferences</strong> can help. (<a href="https://www.dhs.state.mn.us/EIDBI-CoordinatedCareConference/" target="_blank" rel="noopener noreferrer" className="text-pacific-cyan hover:underline font-medium">Minnesota Department of Human Services</a>)
                  </p>
                </div>
              </div>
            </section>

            <hr className="my-12 border-gray-300" />

            {/* Section 9: How Ability Avenues Can Help */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-raisin-black mb-6">9. How Ability Avenues Can Help Your Family Navigate EIDBI</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                If you're in Minneapolis or nearby suburbs and you're staring at acronyms (EIDBI, CMDE, ITP, MA, TEFRA) thinking, <em>"I just want my child to get help,"</em> you're not alone.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Here's how a provider like <strong>Ability Avenues</strong> can support you through the EIDBI process:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700 mb-6">
                <li><strong>Explain your options:</strong> We can walk you through how EIDBI works alongside ABA therapy and other services.</li>
                <li><strong>Help you connect with a CMDE provider:</strong> If you don't have a recent CMDE, we can share local resources and help you understand what to ask.</li>
                <li><strong>Translate reports into action:</strong> Once your CMDE and ITP are in place, we help turn them into day-to-day routines, goals, and support strategies.</li>
                <li><strong>Partner with you long-term:</strong> We regularly review progress, adjust goals, and make sure services stay aligned with your child's growth and your family's values.</li>
              </ul>
              <div className="bg-pacific-cyan/10 border-l-4 border-pacific-cyan p-6 mb-8 rounded-r-lg">
                <h3 className="text-xl font-bold text-raisin-black mb-4">Ready to Learn More or Get Started?</h3>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  If you'd like support understanding EIDBI, scheduling a CMDE, or exploring <Link href="/in-home-therapy" className="text-pacific-cyan hover:underline font-medium">in-home</Link> and <Link href="/center-based-therapy" className="text-pacific-cyan hover:underline font-medium">center-based</Link> ABA options in the Twin Cities:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                  <li><Link href="/eidbi" className="text-pacific-cyan hover:underline font-medium">Learn more about EIDBI services</Link></li>
                  <li><Link href="/contact" className="text-pacific-cyan hover:underline font-medium">Contact us</Link></li>
                  <li><Link href="/referrals" className="text-pacific-cyan hover:underline font-medium">Submit a referral</Link></li>
                </ul>
                <p className="text-lg text-gray-700 mt-4 leading-relaxed">
                  You don't need to have everything figured out to reach out. Starting the conversation is enough.
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

export default WhatIsEidbiPost;

