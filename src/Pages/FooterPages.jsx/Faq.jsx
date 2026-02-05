import React from 'react'
import SectionHeading from '../../Components/SectionHeading/SectionHeading'

const Faq = () => {
  return (
    <>
        <div className="st-height-b125 st-height-lg-b80" id="home"></div>
      <div className="st-height-b120 st-height-lg-b80" />
      <SectionHeading title="FAQ" />
      <div className="container mb-5">
        <div className="row">
      <div className="flex flex-col md:flex-row justify-between items-start p-6">
      <div className="col-lg-6">
        <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
        <div className="space-y-4">
          <details className="border-t border-b border-gray-200 py-2">
            <summary className="cursor-pointer">Why are my gums bleeding?</summary>
            <p className="mt-2">BGums bleed when they are irritated and inflamed which is not considered normal. This is due to plague (a soft film of bacteria) being left on the teeth which causes inflammation called gingivitis and if not addressed can develop into gum disease. Over time, if not cleaned off through daily brushing and interdental cleaning, the plaque can turn into a hard deposit called tartar or calculus which will require professional scaling by your dentist or hygienist to remove it.

It is important even if your gums bleed they are still brushed to keep the mouth clean otherwise the bacteria build up in the mouth will make gum inflammation worse. After a few days of thorough cleaning, your gums should stop bleeding. If this does not happen you will need to ask the advice of your dental team as you may need professional cleaning.

A good oral care regime should be able to prevent your gums from bleeding if done correctly. We would always suggest that you have regular examinations at your dentist. This can help diagnose and treat anything unusual in your mouth so you get the correct care and advice.

You may have to use a softer brush whilst the gums are inflamed uni they become healthier. It is also important to clean in between teeth daily using interdental brushes or floss.

Smoking can cover up a gum problem as it restricts the blood flow to the mouth. If you have recently given up smoking this could allow the gums to get a better circulation and therefore start to bleed.

</p>
          </details>
          <details className="border-t border-b border-gray-200 py-2">
            <summary className="cursor-pointer">What can I do if I have sensitive teeth?</summary>
            <p className="mt-2">You can try using a toothpaste specifically designed for sensitive teeth. Brush your teeth as normal using de-sensitising and then rub a litle toothpaste into the sensitive area when going to bed as it helps protect the surface.

Try to avoid strongly acidic foods and drinks and wait at least an hour after eating before brushing as this could cause even more sensitivity. Grinding your teeth can also increase sensitivity and a mouth guard maybe necessary.

If the pain continues, speak to your dental team and they may be able to offer further care to reduce your symptoms. A number of things can cause sensitivity and your dental team will be able to identify these and advise the correct care.</p>
          </details>
          <details className="border-t border-b border-gray-200 py-2">
            <summary className="cursor-pointer">How often should I have a dental check up?</summary>
            <p className="mt-2">Dental health varies from person to person; a general rule for adult patients is to visit a dentist once or twice a year, even if your mouth is in excellent condition. This way, you can get your teeth professionally cleaned regularly and maintain excellent oral health.</p>
          </details>
          <details className="border-t border-b border-gray-200 py-2">
            <summary className="cursor-pointer">Nervous about seeing a dentist?</summary>
            <p className="mt-2">Dental phobia exists, this can result in anxiety, panic attacks, difficulty breathing, nausea, and fainting. Our dental team have years of experience dealing with patients concerns, making them feel calm, safe and welcome- you will NEVER have to undertake any treatment you're not comfortable and we will talk and guide you through the full process. We understand that avoiding or delaying treatment will have an overall impact on your oral health.</p>
          </details>
          <details className="border-t border-b border-gray-200 py-2">
            <summary className="cursor-pointer">Some home methods to treat toothache if you cannot access a dentist.</summary>
            <p className="mt-2">Try over the counter painkillers like paracetamol or ibuprofen. Only take the medications if you are normally ok taking them. Occasionally it will reduce the pain slightly until you can get to the dentist. This is only a temporary measure but sometimes it helps if you have no other alternative. Hot salt water mouth washes are very useful if you have a swelling or some sort of infection. Salt water is a natural anti-septic and can reduce pain.</p>
          </details>
        </div>
      </div>
     
    </div>
      </div>
      </div>
    </>
  )
}

export default Faq
