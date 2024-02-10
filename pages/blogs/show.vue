<script setup>
import Breadcrumb from "~/components/MainBreadcrumb.vue";
import BreadcrumbItem from "~/components/BreadcrumbItem.vue";
import RelatedBlogCard from "~/components/RelatedBlogCard.vue";
import BlogCategoryCard from "~/components/BlogCategoryCard.vue";
import BlogTagCard from "~/components/BlogTagCard.vue";
import BlogCommentSection from "~/components/BlogCommentSection.vue";
</script>

<template>
  <section>
    <div class="container mx-auto py-10 space-y-6">
      <div
        class="flex flex-col items-start md:flex-row md:items-center md:justify-between mb-4 md:mb-8 border-b pb-5"
      >
        <Breadcrumb label="Home">
          <BreadcrumbItem label="Blogs" />
          <BreadcrumbItem label="This is my first blog" />
        </Breadcrumb>
      </div>

      <div class="grid grid-cols-4 gap-5">
        
        <div class="col-span-1 space-y-5">
          <RelatedBlogCard />
          <BlogCategoryCard />
          <BlogTagCard />
        </div>

        <div class="w-full col-span-3">
          <div class="border border-slate-300 shadow-lg rounded-md p-2">
            <img
              src="https://img.freepik.com/free-photo/toy-bricks-table_144627-48267.jpg"
              alt="blog-image"
              class="w-full max-h-[600px] object-cover"
            />
          </div>

          <h1 class="font-bold text-2xl text-slate-800 line-clamp-2 mt-8 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dicta rerum
            cum harum saepe delectus doloremque nam recusandae explicabo laboriosam quia
            maxime non a, reiciendis fugit dolorem, facilis eligendi molestias?
          </h1>

          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center space-x-4">
              <span
                class="text-xs font-bold bg-red-500 text-white py-1 px-3 rounded-sm shadow"
              >
                Category One
              </span>

              <span class="font-bold text-slate-700 text-sm">
                <i class="fa-solid fa-user"></i>
                Aung Thu Zaw
              </span>

              <span class="font-bold text-slate-700 text-sm">
                <i class="fa-solid fa-clock"></i>
                12-September-2023
              </span>
            </div>

            <!-- Share Blog Social Icons Start -->
            <div class="hidden md:flex items-center">
              <span class="font-bold text-slate-700 mr-3">
                <i class="fa-solid fa-share-nodes"></i> Share :
              </span>

              <a href="#" target="_blank">
                <i class="fa-brands fa-facebook mr-3 text-lg text-blue-600"></i>
              </a>
              <a href="#" target="_blank">
                <i class="fa-brands fa-twitter mr-3 text-lg text-sky-600"></i>
              </a>
              <a href="#" target="_blank">
                <i class="fa-brands fa-telegram mr-3 text-lg text-blue-500"></i>
              </a>
              <a href="#" target="_blank">
                <i class="fa-brands fa-whatsapp mr-3 text-lg text-emerald-600"></i>
              </a>
              <a href="#" target="_blank">
                <i class="fa-solid fa-link mr-3 text-sm text-slate-700"></i>
              </a>
            </div>
            <!-- Share Blog Social Icons End -->
          </div>

          <hr class="my-3" />

          <!-- Blog Description -->
          <p class="text-slate-800 mb-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, est. Et
            ab laboriosam, amet quia culpa fugit natus similique a beatae corporis
            architecto perferendis voluptatem deserunt porro! Fuga, sunt doloremque!

            <br />

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quibusdam
            nesciunt, autem modi rerum voluptatem aspernatur vel dolorem, mollitia
            corporis voluptatibus ipsam, excepturi at a sequi facilis similique maiores
            tempora. Tempore officiis voluptatem quod culpa eligendi? Autem, impedit quam
            iure incidunt consectetur vero ad ullam. Corporis cum vel nobis neque nulla
            atque excepturi dolore velit numquam molestiae odio debitis quo, harum rerum
            autem suscipit aspernatur magni? At dolorem doloremque pariatur reiciendis
            tenetur, deleniti natus dolorum illo unde sed placeat quos earum molestiae
            repellendus? Tempora, nulla sunt accusantium voluptate eveniet voluptas
            voluptatum libero! Suscipit officia culpa repudiandae porro ex ab consequatur.

            <br />

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quos qui
            ducimus rem doloremque soluta obcaecati, culpa fugit nemo similique pariatur
            earum recusandae rerum eos maxime fuga necessitatibus eius exercitationem
            nobis, atque, minima aliquam. Beatae quam aspernatur iusto unde, magni culpa,
            minima ullam fuga, nobis eaque saepe temporibus quo consequatur?

            <br />

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquam
            reprehenderit quidem repellendus dolorum pariatur id et quibusdam maxime in!
            Itaque tempore quisquam id similique dignissimos accusantium earum expedita
            consequatur ratione! Culpa consectetur veniam quasi non laudantium, possimus
            error sed eligendi ea voluptatum esse aliquam maiores est sunt quae
            consequuntur! Pariatur est, modi nihil ex quidem enim ad, exercitationem
            dolorem, quos perferendis culpa cupiditate odit dolorum. Consequuntur
            doloremque consectetur veniam molestiae. Repellat natus minus in provident
            porro, quod alias, fugit reprehenderit qui architecto, ad quidem nesciunt
            laborum eum. Culpa ipsa qui quasi aliquam autem architecto ea et minus
            molestiae nulla repellat eveniet ipsum atque soluta omnis aperiam obcaecati
            odit quas eligendi provident, numquam consequatur modi voluptatibus
            perferendis? Optio non adipisci perspiciatis? Officiis nihil modi laboriosam
            minima deserunt corporis quas quasi beatae id alias dignissimos excepturi,
            quod, repellat vero perferendis! Debitis ipsa, tenetur illum mollitia eos
            aliquam fugiat maxime recusandae, modi corrupti, libero asperiores deleniti
            dolores. Obcaecati id ex hic velit delectus illo, aut itaque. Harum quos
            asperiores beatae tempore temporibus dolores consequuntur molestiae rerum
            eveniet excepturi error minima doloremque hic suscipit, optio neque magni
            molestias culpa officia tenetur nemo? Debitis accusamus quae hic molestias.
            Commodi corrupti iusto maxime earum amet.

            <br />

            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias explicabo
            sapiente necessitatibus, facere temporibus iure quos eligendi cupiditate
            facilis officia ab molestias in, laudantium numquam earum impedit sunt
            architecto aliquid nesciunt tempore distinctio, deserunt ipsam? Delectus
            veniam repellendus minima quidem ratione et ullam laudantium aliquam,
            veritatis, eum explicabo eius vero? Esse quaerat officia deserunt nemo? Ad
            facilis cupiditate repudiandae nesciunt totam tempora. Dolores nulla
            necessitatibus optio ut quaerat aut suscipit possimus expedita blanditiis.
            Deserunt ducimus recusandae cum, explicabo possimus placeat architecto
            voluptatibus accusamus magnam maxime quos aspernatur commodi quaerat maiores?
            Magni, possimus! Commodi deleniti hic ipsa. Saepe consequuntur quia hic.
          </p>

          <!-- Blog Tags Start -->
          <div class="flex items-center mb-5">
            <span class="font-bold text-slate-800 mr-3">Blog Tags :</span>
            <div class="flex items-center space-x-2">
              <button
                type="button"
                class="px-3 py-1 bg-red-600 rounded-full text-white text-xs capitalize font-bold hover:bg-red-700 transition-all"
              >
                Tag One
              </button>
              <button
                type="button"
                class="px-3 py-1 bg-red-600 rounded-full text-white text-xs capitalize font-bold hover:bg-red-700 transition-all"
              >
                Tag Two
              </button>
            </div>
          </div>
          <!-- Blog Tags End -->

          <!-- Blog Comments Section -->
          <BlogCommentSection />
        </div>
      </div>
    </div>
  </section>
</template>
