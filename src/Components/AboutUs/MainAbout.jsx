import { Typewriter } from 'react-simple-typewriter';
import Footer from "../../MainComponents/Footer"
import Navbar from "../../MainComponents/Navbar"
import Content from "./TextArea"
import LogoHeading from "../../Pages/LogoHeading";
import BenefitsSection from "../../Pages/BenefitsSection";
import { useState } from "react";
export const MainAbout = () => {
  return (


    <>
      <div className="gap-4 flex flex-col">


        <div className="m-12">


          <Navbar />
        </div>

        <HeroImage wallpaper={"https://i.pinimg.com/564x/d6/87/ef/d687efe61afd29dde17faa08c6741c3e.jpg"} Heading={"This is Heading"} />
        <LogoHeading heading={"THIS IS HEADING"} />
        <Content />
        <BenefitsSection />
        <FAQSection />
        <Footer />

      </div>

    </>

  )
}


















export const TeachersTestimonials = ()=>{
  return (

<>

              <section>
                <div class="px-8 py-12 mx-auto md:px-12 lg:px-32 max-w-7xl">
                  <div class="flex flex-col w-full" x-data="{
                      skip: 1,
                      atBeginning: false,
                      atEnd: false,
                      next() {
                          this.to((current, offset) => current + (offset * this.skip))
                      },
                      prev() {
                          this.to((current, offset) => current - (offset * this.skip))
                      },
                      to(strategy) {
                          let slider = this.$refs.slider
                          let current = slider.scrollLeft
                          let offset = slider.firstElementChild.getBoundingClientRect().width
                          slider.scrollTo({ left: strategy(current, offset), behavior: 'smooth' })
                      },
                      focusableWhenVisible: {
                          'x-intersect:enter'() {
                              this.$el.removeAttribute('tabindex')
                          },
                          'x-intersect:leave'() {
                              this.$el.setAttribute('tabindex', '-1')
                          },
                      },
                      disableNextAndPreviousButtons: {
                          'x-intersect:enter.threshold.05'() {
                              let slideEls = this.$el.parentElement.children
                              // If this is the first slide.
                              if (slideEls[0] === this.$el) {
                                  this.atBeginning = true
                              // If this is the last slide.
                              } else if (slideEls[slideEls.length-1] === this.$el) {
                                  this.atEnd = true
                              }
                          },
                          'x-intersect:leave.threshold.05'() {
                              let slideEls = this.$el.parentElement.children
                              // If this is the first slide.
                              if (slideEls[0] === this.$el) {
                                  this.atBeginning = false
                              // If this is the last slide.
                              } else if (slideEls[slideEls.length-1] === this.$el) {
                                  this.atEnd = false
                              }
                          },
                      },
                  }">
                    <div class="flex flex-col w-full" aria-labelledby="carousel-label" role="region" tabindex="0" x-on:keydown.left="prev" x-on:keydown.right="next">
                      <h2 class="sr-only" hidden="" id="carousel-label">
                        Carousel
                      </h2>
                      <span class="sr-only" hidden="" id="carousel-content-label">Carousel</span>
                      <div class="inline-flex items-center space-x-2 lg:px-2">
                        <button class="flex items-center text-white bg-blue-500 rounded-full hover:bg-blue-600 size-8 focus:bg-blue-400" :class="{ 'opacity-50 ': atBeginning }" :aria-disabled="atBeginning" :tabindex="atEnd ? -1 : 0" x-on:click="prev" tabindex="0">
                          <span aria-hidden="true" class="mx-auto">
                            ← </span><span class="sr-only">Skip to previous slide page</span>
                        </button>
                        <button class="flex items-center text-white bg-blue-500 rounded-full hover:bg-blue-600 size-8 focus:bg-blue-400" :class="{ 'opacity-50 ': atEnd }" :aria-disabled="atEnd" :tabindex="atEnd ? -1 : 0" x-on:click="next" tabindex="0">
                          <span aria-hidden="true" class="mx-auto">
                            → </span><span class="sr-only">Skip to next slide page</span>
                        </button>
                      </div>
                      <ul class="flex w-full gap-3 mt-4 overflow-x-scroll text-center scrollbar-hide snap-mandatory snap-x rounded-2xl" role="listbox" aria-labelledby="carousel-content-label" tabindex="0" x-ref="slider">
                        <li class="p-2 border shrink-0 snap-start bg-gray-50 rounded-3xl" role="option" x-bind="disableNextAndPreviousButtons">
                          <figure class="relative flex flex-col justify-between h-full max-w-xs p-6 bg-white border shadow-lg rounded-2xl">
                            <figcaption class="relative flex flex-col justify-between">
                              <img alt="#_" src="/images/appify/avatar1.png" class="object-cover mx-auto rounded-full size-14 grayscale">
                              <div class="mt-4">
                                <div class="font-medium text-gray-900">Michael Andreuzza</div>
                                <div class="mt-1 text-sm text-gray-500">
                                  Creator of Windstatic.com
                                </div>
                              </div>
                            </figcaption>
                            <blockquote class="mt-4">
                              <p class="text-base font-medium text-gray-500">
                                Being in the financial industry, we were always looking for
                                ways to enhance our transactions' security and efficiency.
                              </p>
                            </blockquote>
                          </figure>
                        </li>
                        <li class="p-2 border shrink-0 snap-start bg-gray-50 rounded-3xl" role="option" x-bind="disableNextAndPreviousButtons">
                          <figure class="relative flex flex-col justify-between h-full max-w-xs p-6 bg-white border shadow-lg rounded-2xl">
                            <figcaption class="relative flex flex-col justify-between">
                              <img alt="#_" src="/images/appify/avatar2.png" class="object-cover mx-auto rounded-full size-14 grayscale">
                              <div class="mt-4">
                                <div class="font-medium text-gray-900">Gege Piazza</div>
                                <div class="mt-1 text-sm text-gray-500">
                                  Creator of Pizza Piazza
                                </div>
                              </div>
                            </figcaption>
                            <blockquote class="mt-4">
                              <p class="text-base font-medium text-gray-500">
                                Implementing Semplice's blockchain technology has been a
                                game-changer for our supply chain management.
                              </p>
                            </blockquote>
                          </figure>
                        </li>
                        <li class="p-2 border shrink-0 snap-start bg-gray-50 rounded-3xl" role="option" x-bind="disableNextAndPreviousButtons">
                          <figure class="relative flex flex-col justify-between h-full max-w-xs p-6 bg-white border shadow-lg rounded-2xl">
                            <figcaption class="relative flex flex-col justify-between">
                              <img alt="#_" src="/images/appify/avatar3.png" class="object-cover mx-auto rounded-full size-14 grayscale">
                              <div class="mt-4">
                                <div class="font-medium text-gray-900">Jenson Button</div>
                                <div class="mt-1 text-sm text-gray-500">
                                  Founder of Benji and Tom
                                </div>
                              </div>
                            </figcaption>
                            <blockquote class="mt-4">
                              <p class="text-base font-medium text-gray-500">
                                We were initially hesitant about integrating blockchain
                                technology into our existing systems.
                              </p>
                            </blockquote>
                          </figure>
                        </li>  <li class="p-2 border shrink-0 snap-start bg-gray-50 rounded-3xl" role="option" x-bind="disableNextAndPreviousButtons">
                          <figure class="relative flex flex-col justify-between h-full max-w-xs p-6 bg-white border shadow-lg rounded-2xl">
                            <figcaption class="relative flex flex-col justify-between">
                              <img alt="#_" src="/images/appify/avatar1.png" class="object-cover mx-auto rounded-full size-14 grayscale">
                              <div class="mt-4">
                                <div class="font-medium text-gray-900">Michael Andreuzza</div>
                                <div class="mt-1 text-sm text-gray-500">
                                  Creator of Windstatic.com
                                </div>
                              </div>
                            </figcaption>
                            <blockquote class="mt-4">
                              <p class="text-base font-medium text-gray-500">
                                Being in the financial industry, we were always looking for
                                ways to enhance our transactions' security and efficiency.
                              </p>
                            </blockquote>
                          </figure>
                        </li>
                        <li class="p-2 border shrink-0 snap-start bg-gray-50 rounded-3xl" role="option" x-bind="disableNextAndPreviousButtons">
                          <figure class="relative flex flex-col justify-between h-full max-w-xs p-6 bg-white border shadow-lg rounded-2xl">
                            <figcaption class="relative flex flex-col justify-between">
                              <img alt="#_" src="/images/appify/avatar2.png" class="object-cover mx-auto rounded-full size-14 grayscale">
                              <div class="mt-4">
                                <div class="font-medium text-gray-900">Gege Piazza</div>
                                <div class="mt-1 text-sm text-gray-500">
                                  Creator of Pizza Piazza
                                </div>
                              </div>
                            </figcaption>
                            <blockquote class="mt-4">
                              <p class="text-base font-medium text-gray-500">
                                Implementing Semplice's blockchain technology has been a
                                game-changer for our supply chain management.
                              </p>
                            </blockquote>
                          </figure>
                        </li>
                        <li class="p-2 border shrink-0 snap-start bg-gray-50 rounded-3xl" role="option" x-bind="disableNextAndPreviousButtons">
                          <figure class="relative flex flex-col justify-between h-full max-w-xs p-6 bg-white border shadow-lg rounded-2xl">
                            <figcaption class="relative flex flex-col justify-between">
                              <img alt="#_" src="/images/appify/avatar3.png" class="object-cover mx-auto rounded-full size-14 grayscale">
                              <div class="mt-4">
                                <div class="font-medium text-gray-900">Jenson Button</div>
                                <div class="mt-1 text-sm text-gray-500">
                                  Founder of Benji and Tom
                                </div>
                              </div>
                            </figcaption>
                            <blockquote class="mt-4">
                              <p class="text-base font-medium text-gray-500">
                                We were initially hesitant about integrating blockchain
                                technology into our existing systems.
                              </p>
                            </blockquote>
                          </figure>
                        </li>  <li class="p-2 border shrink-0 snap-start bg-gray-50 rounded-3xl" role="option" x-bind="disableNextAndPreviousButtons">
                          <figure class="relative flex flex-col justify-between h-full max-w-xs p-6 bg-white border shadow-lg rounded-2xl">
                            <figcaption class="relative flex flex-col justify-between">
                              <img alt="#_" src="/images/appify/avatar1.png" class="object-cover mx-auto rounded-full size-14 grayscale">
                              <div class="mt-4">
                                <div class="font-medium text-gray-900">Michael Andreuzza</div>
                                <div class="mt-1 text-sm text-gray-500">
                                  Creator of Windstatic.com
                                </div>
                              </div>
                            </figcaption>
                            <blockquote class="mt-4">
                              <p class="text-base font-medium text-gray-500">
                                Being in the financial industry, we were always looking for
                                ways to enhance our transactions' security and efficiency.
                              </p>
                            </blockquote>
                          </figure>
                        </li>
                        <li class="p-2 border shrink-0 snap-start bg-gray-50 rounded-3xl" role="option" x-bind="disableNextAndPreviousButtons">
                          <figure class="relative flex flex-col justify-between h-full max-w-xs p-6 bg-white border shadow-lg rounded-2xl">
                            <figcaption class="relative flex flex-col justify-between">
                              <img alt="#_" src="/images/appify/avatar2.png" class="object-cover mx-auto rounded-full size-14 grayscale">
                              <div class="mt-4">
                                <div class="font-medium text-gray-900">Gege Piazza</div>
                                <div class="mt-1 text-sm text-gray-500">
                                  Creator of Pizza Piazza
                                </div>
                              </div>
                            </figcaption>
                            <blockquote class="mt-4">
                              <p class="text-base font-medium text-gray-500">
                                Implementing Semplice's blockchain technology has been a
                                game-changer for our supply chain management.
                              </p>
                            </blockquote>
                          </figure>
                        </li>
                        <li class="p-2 border shrink-0 snap-start bg-gray-50 rounded-3xl" role="option" x-bind="disableNextAndPreviousButtons">
                          <figure class="relative flex flex-col justify-between h-full max-w-xs p-6 bg-white border shadow-lg rounded-2xl">
                            <figcaption class="relative flex flex-col justify-between">
                              <img alt="#_" src="/images/appify/avatar3.png" class="object-cover mx-auto rounded-full size-14 grayscale">
                              <div class="mt-4">
                                <div class="font-medium text-gray-900">Jenson Button</div>
                                <div class="mt-1 text-sm text-gray-500">
                                  Founder of Benji and Tom
                                </div>
                              </div>
                            </figcaption>
                            <blockquote class="mt-4">
                              <p class="text-base font-medium text-gray-500">
                                We were initially hesitant about integrating blockchain
                                technology into our existing systems.
                              </p>
                            </blockquote>
                          </figure>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            

</>


  )
}


