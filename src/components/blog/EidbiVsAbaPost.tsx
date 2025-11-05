'use client';

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import eidbiHeroImage from '@/assets/eidbi-blog-cover.jpg';

const EidbiVsAbaPost = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-white">
        <article className="max-w-4xl mx-auto px-4 pt-32 pb-12 md:pt-40 md:pb-16 lg:pt-48 lg:pb-20">
          {/* Hero Section */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-raisin-black mb-6 leading-tight">
              EIDBI vs ABA: How Minnesota's Program Helps Families Access ABA Therapy
            </h1>
            <div className="flex flex-wrap gap-4 text-muted-foreground mb-8">
              <span className="text-base">Ability Avenues Team</span>
              <span>•</span>
              <time dateTime="2025-11-05" className="text-base">November 5, 2025</time>
            </div>
          </header>

          {/* Hero Image */}
          <div className="mb-12">
            <Image
              src={eidbiHeroImage}
              alt="EIDBI vs ABA: How Minnesota's Program Helps Families Access ABA Therapy"
              className="w-full h-auto rounded-xl object-cover"
              priority
            />
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            {/* Short Version */}
            <div className="bg-pacific-cyan/10 border-l-4 border-pacific-cyan p-6 mb-8 rounded-r-lg">
              <p className="text-lg font-semibold text-raisin-black mb-2">Short version:</p>
              <p className="text-raisin-black">
                ABA is a therapy approach. <strong>EIDBI</strong> is Minnesota's Medicaid benefit that can <strong>fund</strong> ABA (and a few related, evidence-based services) for eligible kids and young adults. It removes cost barriers and gives a structured path to care for families who qualify.
              </p>
            </div>

            <hr className="my-12 border-gray-300" />

            {/* What is ABA */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-raisin-black mb-6">What is ABA therapy—quickly and clearly</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Applied Behavior Analysis (ABA) uses teaching strategies (reinforcement, prompting, shaping, data-guided decisions) to help kids build communication, daily living, play, flexibility, safety, and more. Sessions can be <Link href="/in-home-therapy" className="text-pacific-cyan hover:underline font-medium">in-home</Link> or <Link href="/center-based-therapy" className="text-pacific-cyan hover:underline font-medium">in-center</Link>, one-to-one or small-group, and include <strong>parent training</strong> so progress continues between visits.
              </p>
              <p className="text-lg text-gray-700 italic leading-relaxed">
                At Ability Avenues, we offer both in-home and center-based ABA.
              </p>
            </section>

            <hr className="my-12 border-gray-300" />

            {/* What is EIDBI */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-raisin-black mb-6">What is EIDBI—and how is it different from ABA?</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                <strong>EIDBI</strong> = <strong>Early Intensive Developmental and Behavioral Intervention</strong>, a Minnesota Health Care Programs benefit for people <strong>under 21</strong> with <strong>autism or a related condition</strong> when services are <strong>medically necessary</strong>. It's not a therapy by itself—it's the <strong>coverage framework</strong> that helps pay for services like ABA after eligibility steps are completed.
              </p>
              
              <p className="text-lg text-gray-700 mb-4 leading-relaxed font-semibold">To use EIDBI, families typically need:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-lg text-gray-700">
                <li>A qualifying diagnosis and a <strong>Comprehensive Multi-Disciplinary Evaluation (CMDE)</strong> that documents medical necessity</li>
                <li>Enrollment in <strong>MA</strong>, <strong>MinnesotaCare</strong>, or <strong>MA-TEFRA</strong> (TEFRA often helps middle-income families qualify because it counts the child's income/disability needs)</li>
                <li>An <strong>Individual Treatment Plan (ITP)</strong> developed and updated by qualified providers</li>
                <li>A child under the <strong>age of 21</strong></li>
              </ul>
            </section>

            {/* What EIDBI covers */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-raisin-black mb-6">What EIDBI actually covers</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                EIDBI covers a <strong>small set of defined services</strong> that fit together across the care journey. Here's how they show up for families:
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-raisin-black mb-4">1) Comprehensive Multi-Disciplinary Evaluation (CMDE)</h3>
                  <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                    <li><strong>Purpose:</strong> Establishes medical necessity and EIDBI eligibility; it's required to start and keep services authorized.</li>
                    <li><strong>What families experience:</strong> Record review, standardized/functional assessments, clinical observation, and a written summary with recommendations and intensity.</li>
                    <li><strong>By whom:</strong> A DHS-qualified CMDE provider (or supervised trainee) completes the evaluation and shares the report.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-raisin-black mb-4">2) Individual Treatment Plan (ITP) development & progress monitoring</h3>
                  <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                    <li><strong>Purpose:</strong> Turns CMDE findings into measurable goals, service types/intensity, settings, provider roles, and data procedures; then monitors progress and updates over time.</li>
                    <li><strong>What families experience:</strong> Clear goals, how/where therapy happens, how data are collected, and a predictable review cadence using DHS forms (e.g., DHS-7109).</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-raisin-black mb-4">3) Coordinated care conference</h3>
                  <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                    <li><strong>Purpose:</strong> A structured meeting to align family, EIDBI clinicians, school, and medical teams—review progress, clarify roles, and adjust strategies so everyone rows in the same direction.</li>
                    <li><strong>What families experience:</strong> Documented participants, purpose, discussion points, and action items—billed only when it meets EIDBI criteria (not general admin).</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-raisin-black mb-4">4) Intervention (individual, group, higher intensity)</h3>
                  <p className="text-lg text-gray-700 mb-3 leading-relaxed"><strong>Purpose:</strong> The direct, individualized therapy time (e.g., ABA) that targets CMDE-identified needs and ITP goals.</p>
                  <p className="text-lg text-gray-700 mb-3 leading-relaxed font-semibold">What families experience:</p>
                  <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                    <li><strong>Individual sessions:</strong> tailored skill building and behavior support</li>
                    <li><strong>Group sessions:</strong> social/play/communication practice when clinically appropriate</li>
                    <li><strong>Higher-intensity:</strong> more staffing/structure when needs warrant; typically requires strong clinical justification and, in some cases, prior authorization</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-raisin-black mb-4">5) Intervention observation & direction (clinical supervision for the person's benefit)</h3>
                  <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                    <li><strong>Purpose:</strong> A qualified provider observes active intervention, reviews data, models procedures, and gives real-time direction to improve outcomes and maintain fidelity.</li>
                    <li><strong>What families experience:</strong> On-the-spot coaching and protocol refinements tied to the child's plan (not generic staff training).</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-raisin-black mb-4">6) Family/caregiver training & counseling</h3>
                  <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                    <li><strong>Purpose:</strong> Equips caregivers with strategies to support plan goals at home and in the community (visuals, prompting, reinforcement, transitions, community outings, bedtime routines, etc.).</li>
                    <li><strong>What families experience:</strong> Teaching + coaching tied to the ITP, documentation of topics, practice, feedback, and next steps.</li>
                  </ul>
                </div>
              </div>

              <blockquote className="border-l-4 border-xanthous bg-xanthous/10 p-6 my-8 rounded-r-lg">
                <p className="text-lg text-raisin-black italic">
                  <strong>Modalities:</strong> EIDBI recognizes multiple treatment modalities (ABA is one), and DHS periodically updates this list. Providers match the clinical approach to the CMDE and ITP—not one-size-fits-all.
                </p>
              </blockquote>
            </section>

            <hr className="my-12 border-gray-300" />

            {/* Telehealth section */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-raisin-black mb-6">Telehealth, settings & compliance (what to expect)</h2>
              <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700">
                <li><strong>Where services happen:</strong> Home, clinic/center, and appropriate community locations. Some activities can be <strong>telehealth</strong> when clinically appropriate and compliant with DHS policy.</li>
                <li><strong>Paper trail that matters:</strong> <strong>CMDE → ITP → services delivered → progress monitoring</strong>—each billed unit maps to a documented need/goal.</li>
                <li><strong>Qualified providers & supervision:</strong> DHS-recognized roles with required supervision structures; agencies must meet MHCP requirements (and Minnesota is rolling out provisional licensure for EIDBI agencies).</li>
              </ul>
            </section>

            <hr className="my-12 border-gray-300" />

            {/* Comparison Table */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-raisin-black mb-6">EIDBI vs ABA—how they fit together</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 my-8">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-4 text-left font-bold text-raisin-black">Question</th>
                      <th className="border border-gray-300 p-4 text-left font-bold text-raisin-black">ABA Therapy</th>
                      <th className="border border-gray-300 p-4 text-left font-bold text-raisin-black">EIDBI (Minnesota program)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-4 font-semibold text-gray-800">What is it?</td>
                      <td className="border border-gray-300 p-4 text-gray-700">A therapy approach delivered by trained clinicians (often BCBA-led teams).</td>
                      <td className="border border-gray-300 p-4 text-gray-700">A <strong>Minnesota Health Care Programs</strong> benefit that funds medically necessary services (like ABA) for eligible kids/youth.</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-4 font-semibold text-gray-800">Who decides the plan?</td>
                      <td className="border border-gray-300 p-4 text-gray-700">Your ABA team creates an ITP with measurable goals and family input.</td>
                      <td className="border border-gray-300 p-4 text-gray-700">State policy defines required elements; the <strong>CMDE</strong> and ITP drive what can be authorized and billed.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 font-semibold text-gray-800">Who pays?</td>
                      <td className="border border-gray-300 p-4 text-gray-700">Private insurance or out-of-pocket if not covered.</td>
                      <td className="border border-gray-300 p-4 text-gray-700"><strong>MA/MinnesotaCare/MA-TEFRA</strong> coverage when EIDBI criteria are met.</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-4 font-semibold text-gray-800">What else is included?</td>
                      <td className="border border-gray-300 p-4 text-gray-700">Direct therapy + caregiver coaching.</td>
                      <td className="border border-gray-300 p-4 text-gray-700">Adds structured elements such as <strong>coordinated care conferences</strong>, mandated progress monitoring, and documentation links across CMDE → ITP → services.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <hr className="my-12 border-gray-300" />

            {/* Timeline */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-raisin-black mb-6">A realistic timeline from "we think we need help" to "we've started"</h2>
              <ol className="list-decimal pl-6 space-y-4 text-lg text-gray-700">
                <li><strong>Screen & refer</strong> → Ask your pediatrician or contact <Link href="/eidbi" className="text-pacific-cyan hover:underline font-medium">EIDBI providers</Link>; they'll explain current <strong>waitlists</strong>.</li>
                <li><strong>CMDE</strong> → Evaluation that establishes medical necessity and EIDBI eligibility.</li>
                <li><strong>Insurance step</strong> → If you're not on MA, explore <strong>MA-TEFRA</strong> (often the path for middle-income families).</li>
                <li><strong>ITP & start of services</strong> → Your team crafts goals, schedules therapy (home/center), sets caregiver coaching, and coordinates with school/medical partners.</li>
              </ol>
              <blockquote className="border-l-4 border-pacific-cyan bg-pacific-cyan/10 p-6 my-8 rounded-r-lg">
                <p className="text-lg text-raisin-black italic">
                  Heads-up on updates: Minnesota has been refining EIDBI policy, supervision expectations, and agency licensure steps. Providers should keep families informed as changes roll out.
                </p>
              </blockquote>
            </section>

            <hr className="my-12 border-gray-300" />

            {/* Twin Cities section */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-raisin-black mb-6">What this looks like in Minneapolis/Twin Cities</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Many families use a <strong>blend</strong> of <Link href="/in-home-therapy" className="text-pacific-cyan hover:underline font-medium">in-home</Link> (great for daily-routine goals and caregiver coaching) and <Link href="/center-based-therapy" className="text-pacific-cyan hover:underline font-medium">center-based</Link> sessions (helpful for structured learning and small-group practice). The mix is based on the <strong>CMDE and ITP</strong>—your child's needs and your family's routines lead.
              </p>
            </section>

            <hr className="my-12 border-gray-300" />

            {/* Ability Avenues section */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-raisin-black mb-6">How Ability Avenues can help (coverage & access)</h2>
              <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700">
                <li>We provide <Link href="/center-based-therapy" className="text-pacific-cyan hover:underline font-medium">in-center</Link> and <Link href="/in-home-therapy" className="text-pacific-cyan hover:underline font-medium">in-home</Link> ABA across the Twin Cities.</li>
                <li>Current estimated waitlists (today): <strong>~2–4 months</strong> for in-home; <strong>~6–8 months</strong> for center-based.</li>
                <li><strong>Part-time and full-time</strong> enrollment options to align with school schedules.</li>
              </ul>
              <p className="text-lg text-gray-700 italic mt-4">
                (When you <Link href="/contact" className="text-pacific-cyan hover:underline font-medium">contact us</Link>, we'll verify benefits and timelines for your specific plan.)
              </p>
            </section>

            <hr className="my-12 border-gray-300" />

            {/* Next Steps */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-raisin-black mb-6">Simple next steps (parents say these help)</h2>
              <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700">
                <li><strong>If you suspect eligibility:</strong> Ask your pediatrician about an <Link href="/eidbi" className="text-pacific-cyan hover:underline font-medium">EIDBI referral</Link> and begin the <strong>CMDE</strong> step.</li>
                <li><strong>If MA isn't set up yet:</strong> Explore <strong>MA-TEFRA</strong> so coverage is in place when your spot opens.</li>
                <li><strong>While you wait:</strong> Start parent-coaching basics (routines, visuals, first-then language), and gather IEP/school notes to speed up goal-setting on day one.</li>
              </ul>
            </section>

            <hr className="my-12 border-gray-300" />

            {/* FAQ */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-raisin-black mb-6">FAQ (quick)</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-raisin-black mb-2">Is EIDBI only for young kids?</h3>
                  <p className="text-lg text-gray-700">
                    No—EIDBI is for <strong>birth through age 20</strong> (under 21). Plans are individualized to age and goals.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-raisin-black mb-2">Do we need a new diagnosis for EIDBI?</h3>
                  <p className="text-lg text-gray-700">
                    You need a <strong>CMDE</strong> that meets DHS requirements and shows medical necessity; it can incorporate existing diagnostic info.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-raisin-black mb-2">Can EIDBI cover parent training?</h3>
                  <p className="text-lg text-gray-700">
                    Yes—caregiver training and counseling tied to the ITP are covered services under EIDBI.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default EidbiVsAbaPost;
