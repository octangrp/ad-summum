import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ServicePage = ({ data }) => (
  <Layout>
    <SEO title="Home" />

    <div class="panel z-10 px-0 pt-32 t-0 overflow-hidden relative min-h-screen md:h-auto sm:h-auto">
      <div class="panel-body min-h-screen  sm:min-h-auto xs:min-h-auto h-100 w-100 lg:w-90 -mt-24 lg:-mt-32 md:-mt-3  xs:mt-5 lg:mt-3 lg:pt-3 p-0 sm:mt-5 ml-auto md:w-90 xs:w-100 sm:w-95 relative">
        <div class="w-100 mx-auto pt-3 text-center">
          <div class="flex">
            <div class="w-40 pt-24">
              <img src={"/img/Untitled-1.png"} class="" />
            </div>

            <div class="w-60 pt-18 bg-primary">
              <div class="px-16">
                <h1 class="text-center font-Bold p-0 m-0 text-white text-6xl pb-24 xs:pb-0">
                  Information gathering
                </h1>

                <p class="text-white text-center font-light leading-normal py-6 m-0 text-base">
                  Paragraphs are the building blocks of papers. Many students
                  define paragraphs in terms of length: a paragraph is a group
                  of at least five sentences, a paragraph is half a page long,
                  etc. In reality, though, the unity and coherence of ideas
                  among sentences is what constitutes a paragraph. A paragraph
                  is defined as “a group of sentences or a single sentence that
                  forms a unit” (Lunsford and Connors 116). Length and
                  appearance do not determine whether a section in a paper is a
                  paragraph. For instance, in some styles of writing,
                  particularly journalistic styles, a paragraph can be just one
                  sentence long. Ultimately, a paragraph is a sentence or group
                  of sentences that support one main idea. In this handout, we
                  will refer to this as the “controlling idea,” because it
                  controls what happens in the rest of the paragraph. Before you
                  can begin to determine what the composition of a particular
                  paragraph will be, you must first decide on an argument and a
                  working thesis statement for your paper. What is the most
                  important idea that you are trying to convey to your reader?
                  The information in each paragraph must be related to that
                  idea. In other words, your paragraphs should remind your
                  reader that there is a recurrent relationship between your
                  thesis and the information in each paragraph. A working thesis
                  functions like a seed from which your paper, and your ideas,
                  will grow. The whole process is an organic one—a natural
                  progression from a seed to a full-blown paper where there are
                  direct, familial relationships between all of the ideas in the
                  paper. The decision about what to put into your paragraphs
                  begins with the germination of a seed of ideas; this
                  “germination process” is better known as brainstorming. There
                  are many techniques for brainstorming; whichever one you
                  choose, this stage of paragraph development cannot be skipped.
                  Building paragraphs can be like building a skyscraper: there
                  must be a well-planned foundation that supports what you are
                  building. Any cracks, inconsistencies, or other corruptions of
                  the foundation can cause your whole paper to crumble. So,
                  let’s suppose that you have done some brainstorming to develop
                  your thesis. What else should you keep in mind as you begin to
                  create paragraphs?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default ServicePage
