<template>
    <div id="app">
        <header class="main-header">
            <div class="container">
                <nav class="navbar">
                    <div class="navbar-brand">
                        <a class="navbar-item brand-logo" href="#"></a>
                        <div class="navbar-burger burger" data-target="navbarMenu"
                             :class="{'is-active' : showMenu }" @click="showMenu = !showMenu" v-click-outside="hideMenu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                    <div class="navbar-menu" id="navbarMenu">
                        <div class="navbar-end">
                            <a v-if="ru" href="#" class="navbar-item" @click.prevent="scrollSpy('.about-wrap', 500)">О нас</a>
                            <a v-else href="#" class="navbar-item" @click.prevent="scrollSpy('.about-wrap', 500)">About</a>
                            <a v-if="ru" href="#" class="navbar-item" @click.prevent="scrollSpy('.gallery', 1200)">Галерея</a>
                            <a v-else href="#" class="navbar-item" @click.prevent="scrollSpy('.gallery', 1200)">Gallery</a>
                            <a v-if="ru" href="#" class="navbar-item" @click.prevent="scrollSpy('.comments', 1500)">Команда</a>
                            <a v-else href="#" class="navbar-item" @click.prevent="scrollSpy('.comments', 1500)">Team</a>
                            <a v-if="ru" href="#" class="navbar-item" @click.prevent="scrollSpy('.contacts', 1700)">Контакты</a>
                            <a v-else href="#" class="navbar-item" @click.prevent="scrollSpy('.contacts', 1700)">Contacts</a>
                            <a v-if="ru" href="#" class="navbar-item" @click.prevent="planModal = true">Проекты</a>
                            <a v-else href="#" class="navbar-item" @click.prevent="planModal = true">Projects</a>
                            <div class="language-button-wrap">
                              <button class="language-button" @click.prevent="ru = !ru">
                                <span :class="{'is-active': ru}">RU</span> / <span :class="{'is-active': !ru}">EN</span>
                              </button>
                            </div>
                        </div>
                    </div>

                    <div class="touch-navbar-wrap">
                        <div class="columns touch-navbar-columns">
                            <div class="column is-6-tablet is-offset-3-tablet">
                                <no-ssr>
                                      <div v-show="showMenu" class="touch-navbar-menu">
                                          <div v-if="ru"><a href="#" class="navbar-item" @click.prevent="scrollSpy('.about-wrap', 500)">О нас</a></div>
                                          <div v-else><a href="#" class="navbar-item" @click.prevent="scrollSpy('.about-wrap', 500)">About</a></div>
                                          <div v-if="ru"><a href="#" class="navbar-item" @click.prevent="scrollSpy('.gallery', 1200)">Галерея</a></div>
                                          <div v-else><a href="#" class="navbar-item" @click.prevent="scrollSpy('.gallery', 1200)">Gallery</a></div>
                                          <div v-if="ru" ><a href="#" class="navbar-item" @click.prevent="scrollSpy('.comments', 1500)">Команда</a></div>
                                          <div v-else><a href="#" class="navbar-item" @click.prevent="scrollSpy('.comments', 1500)">Team</a></div>
                                          <div v-if="ru"><a href="#" class="navbar-item" @click.prevent="scrollSpy('.contacts', 1700)">Контакты</a></div>
                                          <div v-else><a href="#" class="navbar-item" @click.prevent="scrollSpy('.contacts', 1700)">Contacts</a></div>
                                          <div v-if="ru"><a href="#" class="navbar-item" @click.prevent="planModal = true">Проекты</a></div>
                                          <div v-else><a href="#" class="navbar-item" @click.prevent="planModal = true">Projects</a></div>
                                          <div class="language-button-wrap">
                                            <button class="language-button" @click.prevent="ru = !ru">
                                              <span :class="{'is-active': ru}">RU</span> / <span :class="{'is-active': !ru}">EN</span>
                                            </button>
                                          </div>
                                      </div>
                                </no-ssr>
                            </div>
                        </div>
                    </div>
                </nav>
                <div id="main-heading" class="main-heading">
                    <h1 v-if="ru">Благотворительный фонд «Ислам кей джи» — организация и продвижение сборов денежных средств</h1>
                    <h1 v-else>The «Islam KG» Charitable Foundation - organization and promotion of cash collections</h1>
                    <h2>+996 ( 505 ) 556 - 570</h2>
                </div>
            </div>
        </header>
        <div id="about-wrap" class="about-wrap">
            <div class="about-us">
                <div class="container">
                    <div class="about-us-box">
                        <div class="about-top-blocks">
                            <div class="about-block about-content">
                              <h2 v-if="ru">О нас</h2>
                              <h2 v-else>About us</h2>
                              <p v-if="ru">Фонд «Ислам кей джи» помогает людям, которые в сложную минуту остались без денег, жилья и поддержки. Под нашей опекой находятся семьи, которые от беды уберег лишь случай и как хорошо, что этим случаем оказались мы. Наша задача сделать все, чтобы маленьким детям больше никогда не пришлось рассчитывать только на удачу, а их мамам на самих себя. Если вы также как и мы верите в добро и не готовы сдаться обстоятельствам, хотите протянуть руку тем, кто отчаялся, станьте частью команды, помогите приумножить добро. </p>
                              <p v-else>The «Islam KG» Foundation helps people who are left without money, housing and support in a difficult moment. Under our care are families who have saved only chance from harm, and how good it is that we have been the case. Our task is to do everything so that little children never again had to rely only on luck, and their mothers on themselves. If you, like us, believe in good and are not ready to surrender to circumstances, you want to lend a hand to those who are desperate, become a part of the team, help increase the good.</p>
                            </div>
                            <div class="about-block image">
                                <img src="~/assets/images/about-1.jpg" alt="">
                            </div>
                        </div>
                        <div class="about-bottom-blocks">
                            <div class="about-block image">
                                <img src="~/assets/images/about-4.jpg" alt="">
                            </div>
                            <div class="about-block about-content">
                              <h2 v-if="ru">Успехи</h2>
                              <h2 v-else>Successes</h2>
                              <p v-if="ru">Каждый очередной курс дает положительные результаты. Ведь совсем недавно он не мог ходить, а сегодня он осваивает бег. Нашим достижениям еще не предел, и все это благодаря фонду «Ислам кей джи»</p>
                              <p v-else>Each regular course gives positive results. After all, recently he could not walk, but today he masters running. Our achievements are not the limit, and all this thanks to the «Islam KG» Foundation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="how-we-do">
                <div class="container">
                    <h2 v-if="ru">Присоединяйтесь к нам</h2>
                    <h2 v-else>Join us</h2>
                    <div class="columns">
                        <div class="column">
                            <div class="issues">
                                <div class="plan-image"></div>
                                <h3 v-if="ru">Сделать пожертвование</h3>
                                <h3 v-else>Make a donation</h3>
                                <p v-if="ru">Каждым сомом вы сеете надежду в сердца тех, кому выпала нелегкая жизнь - любая
                                  помощь бесценна для нас.</p>
                                <p v-else>Every som you sow hope into the hearts of those who have had a difficult
                                  life - any help is invaluable to us.</p>
                            </div>
                        </div>
                        <div class="column">
                            <div class="issues">
                                <div class="sketch-image"></div>
                                <h3 v-if="ru">Стать волонтером</h3>
                                <h3 v-else>Become a volunteer</h3>
                                <p v-if="ru">Приезжайте к нам, познакомьтесь с нашей огромной семьей и подарите нам свою
                                  любовь и поддержку - мы очень нуждаемся в этом.</p>
                                <p v-else>Come to us, meet our huge family and give us your love and support -
                                  we really need it.</p>
                            </div>
                        </div>
                        <div class="column">
                            <div class="issues">
                                <div class="fitting-image"></div>
                                <h3 v-if="ru">Рассказать друзьям</h3>
                                <h3 v-else>Tell friends</h3>
                                <p v-if="ru">Пришли ссылку на нас своему другу, покажи фотографии или просто расскажи нашу
                                  историю - сей добро в мир!</p>
                                <p v-else>Send a link to us to your friend, show photos or just tell our story - this good in the world!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="what-we-do">
                <div class="container">
                    <h2 v-if="ru">Ценности фонда:</h2>
                    <h2 v-else>Fund values:</h2>
                    <!--<div class="columns">-->
                        <!--<div class="column is-three-quarters-desktop">-->
                            <!--<p>Наша мастерская всегда старалась отличаться качеством исполнения заказов. Это самое-->
                                <!--важное,-->
                                <!--что мы можем предоставить в качестве своей визитной карточки: высшее мастерство. </p>-->
                        <!--</div>-->
                    <!--</div>-->
                    <div class="our-services">
                        <div class="columns is-multiline">
                            <div class="column is-half-tablet">
                                <div class="service-block">
                                    <!--<div class="service-icon leather-icon"></div>-->
                                    <div class="service-description">
                                        <h3 v-if="ru">Профессионализм и компетентность</h3>
                                        <h3 v-else>Professionalism and competence</h3>
                                        <p v-if="ru">Наша команда состоит из специалистов, обладающих необходимыми знаниями и
                                          опытом, любящих свою работу. Это позволяет нам эффективно решать поставленные
                                          задачи и добиваться лучших результатов.</p>
                                        <p v-else>Our team consists of specialists with the necessary knowledge and experience,
                                          loving their work. This allows us to effectively solve the tasks and
                                          achieve the best results.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="column is-half-tablet">
                                <div class="service-block">
                                    <!--<div class="service-icon dress-icon"></div>-->
                                    <div class="service-description">
                                        <h3 v-if="ru">Ответственность </h3>
                                        <h3 v-else>A responsibility </h3>
                                        <p v-if="ru">Мы работаем во благо ребенка с ограниченными возможностями здоровья, понимая
                                          степень ответственности, возложенную на нас, в рамках программ и проектов
                                          Фонда. Мы делаем все от нас зависящее для достижения поставленных целей и задач.</p>
                                        <p v-else>We work for the benefit of a child with disabilities, understanding
                                          the degree of responsibility entrusted to us in the framework of the programs
                                          and projects of the Foundation. We are doing everything we can to achieve our
                                          goals and objectives.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="column is-half-tablet">
                                <div class="service-block">
                                    <!--<div class="service-icon costume-icon"></div>-->
                                    <div class="service-description">
                                        <h3 v-if="ru">Прозрачность </h3>
                                        <h3 v-else>Transparency </h3>
                                        <p v-if="ru">Мы придерживаемся ясности, основанной на доступности информации.
                                          Мы регулярно и своевременно публикуем финансовые и другие отчеты по нашей
                                          деятельности.</p>
                                        <p v-else>We adhere to clarity based on the availability of information.
                                          We regularly and timely publish financial and other reports on our
                                          activities.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="column is-half-tablet">
                                <div class="service-block">
                                    <!--<div class="service-icon knit-icon"></div>-->
                                    <div class="service-description">
                                        <h3 v-if="ru">Открытость</h3>
                                        <h3 v-else>Openness</h3>
                                        <p v-if="ru">Мы открыты к сотрудничеству в интересах наших благополучателей. Мы ценим
                                          и уважаем всех наших партнеров и стремимся сделать наше взаимодействие
                                          максимально комфортным и продуктивным.</p>
                                        <p v-else>We are open to cooperation in the interests of our beneficiaries. We value
                                          and respect all our partners and strive to make our interaction as
                                          comfortable and productive as possible.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="gallery" class="gallery">
            <div class="container">
                <h2 v-if="ru">Галерея</h2>
                <h2 v-else>Gallery</h2>
                <div class="gallery-slider">
                    <component :is="SFlickity" ref="flickity" :options="flickityOptions">
                        <div v-for="(blockImages, index) in gallerySliderBlock" :key="index" class="carousel-cell">
                            <div class="columns is-mobile is-multiline">
                                <div v-for="(image, index) in blockImages" :key="index"
                                     class="column is-6-mobile is-4-tablet is-3-desktop">
                                    <a @click="showImage(image.src)"><img class="gallery-image" :src="image.src" :alt="image.name" ></a>
                                </div>
                            </div>
                        </div>
                    </component>
                </div>
                <div class="gallery-navigation">
                    <button class="button-prev" @click="previousGallery()"></button>
                    <button v-for="n in gallerySliderBlock.length" :key="n" class="button-dot" :class="{'icon-is-active': activeSlide === n}" @click="selectSlideGallery(n)"></button>
                    <button class="button-next" @click="nextGallery()"></button>
                </div>
            </div>
        </div>
        <transition name="modal-fade">
            <div v-show="galleryModal" class="modal is-active" >
                <div class="modal-background"></div>
                <div class="modal-content">
                    <p class="image">
                        <img :src="modalImage" alt="alt">
                    </p>
                </div>
                <button class="modal-close is-large" aria-label="close" @click="hideModal"></button>
            </div>
        </transition>
        <div id="comments" class="comments">
            <div class="container">
                <h2 v-if="ru">Команда</h2>
                <h2 v-else>Team</h2>
                <div class="comments-slider">
                    <component :is="SFlickity" ref="flickityComments" :options="flickityOptionsComments">
                        <div class="carousel-cell">
                            <div class="comment-box">
                                <div class="comment-avatar">
                                    <img src="/uploads/avatar-female.png" alt="avatar">
                                </div>
                                <div class="comment-body">
                                    <h3 v-if="ru">Председатель</h3>
                                    <h3 v-else>Chairman</h3>
                                    <p v-if="ru">Омурзакова Айзада Токтоналиевна</p>
                                    <p v-else>Omurzakova Ayzada Toktonalievna</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-cell">
                          <div class="comment-box">
                            <div class="comment-avatar">
                              <img src="/uploads/avatar-female.png" alt="avatar">
                            </div>
                            <div class="comment-body">
                              <h3 v-if="ru">Ревизор</h3>
                              <h3 v-else>Auditor</h3>
                              <p v-if="ru">Джекшеналиева Нурайым Шамиловна</p>
                              <p v-else>Djekshenalieva Nuraiym Shamilovna</p>
                            </div>
                          </div>
                        </div>
                        <div class="carousel-cell">
                          <div class="comment-box">
                            <div class="comment-avatar">
                              <img src="/uploads/avatar-male.png" alt="avatar">
                            </div>
                            <div class="comment-body">
                              <h3 v-if="ru">Секретарь</h3>
                              <h3 v-else>Secretary</h3>
                              <p v-if="ru">Молдобаев Рысбек Орозобекович</p>
                              <p v-else>Moldobaev Rysbek Orozbekovich</p>
                            </div>
                          </div>
                        </div>
                    </component>
                    <button class="navigation-buttons previous-button" @click="previousComment()"></button>
                    <button class="navigation-buttons next-button" @click="nextComment()"></button>
                </div>
            </div>
        </div>
        <div id="contacts" class="contacts">
            <div class="container">
              <div class="contacts-box">
                <h2 v-if="ru">Контакты</h2>
                <h2 v-else>Contacts</h2>
                <div v-if="ru" class="contacts-body">
                  <p>Телефон: +996 (505) 556 570</p>
                  <p>Почта: islam_k.g@inbox.ru</p>
                  <p>Адрес: Юр адрес ОО "Ислам кей джи" <br> г.Бишкек, Ленинский район, ул. Турусбекова 31</p>
                </div>
                <div v-else class="contacts-body">
                  <p>Phone: +996 (505) 556 570</p>
                  <p>E-mail: islam_k.g@inbox.ru</p>
                  <p>Address: Bishkek, Lenin district, st. Turusbekova 31</p>
                </div>
                <h2 v-if="ru">Поддержка</h2>
                <h2 v-else>Donate us</h2>
                <div v-if="ru" class="contacts-body">
                  <p>Платежные реквизиты KICB</p>
                  <p>Имя получателя: PA Islam KG/ OO Ислам КейДжи</p>
                  <p>Банк получателя: ЗАО "Кыргызкий Инвестиционно-Кредитный Банк", Бишкек, Кыргызская Республика</p>
                  <p>Счет получателя:</p>
                  <p>KGS: 1280016053563211</p>
                  <p>USD: 1280016053563312</p>
                  <p>EUR: 1280016053563413</p>
                </div>
                <div v-else class="contacts-body">
                  <p>KICB payment details</p>
                  <p>Beneficiary name: PA Islam KG/ OO Ислам КейДжи</p>
                  <p>Beneficiary Bank: CJSC Kyrgyz Investment and Credit Bank,Bishkek, Kyrgyz Republic</p>
                  <p>Beneficiary account:</p>
                  <p>KGS: 1280016053563211</p>
                  <p>USD: 1280016053563312</p>
                  <p>EUR: 1280016053563413</p>
                </div>
                <div class="follow-us">
                  <p v-if="ru">Следите за нами в социальных сетях:</p>
                  <p v-else>Follow us on social networks:</p>
                  <div class="icon-link">
                    <a class="facebook-icon" href="https://www.facebook.com/fond.blogotvoritelnyi">
                      <p></p>
                    </a>
                    <a class="instagram-icon" href="https://www.instagram.com/_islam_k.g/?hl=ru">
                      <p></p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <footer>
            <p v-if="ru">Copyright © Ислам кей джи, 2019.</p>
            <p v-else>Copyright © Islam KG, 2019.</p>
        </footer>

      <div id="modal-ter" class="modal" :class="{'is-active': planModal}">
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p v-if="ru" class="modal-card-title">Проекты</p>
            <p v-else class="modal-card-title">Projects</p>
            <button class="delete" aria-label="close" @click.prevent="planModal = false"></button>
          </header>
          <section class="modal-card-body">
            <div v-if="ru" class="content">
              <h2>Проект "Дары щедрых людей".</h2>
              <p>Наш фонд примет в дар самое необходимое для нуждающихся в этом людей. Фонд оказывает вещевую помощь семьям, но это направление не является для нас приоритетным. Поэтому те из вас, кто хочет помочь вещами, может использовать один из двух форматов:
                <br>

                Лично передать все детям, осуществив поездку самостоятельно, предварительно согласовать ее с нашими координаторами или волонтерами;
                <br>
                Привезти вещи в офис фонда "Мял", который находится в г. Магас по улице Назарбаева N15; <br>
                Принять участие в периодически проводимых тематических акциях. Например, «Пора в Школу!», «Бумеранг добра» или акции по проекту "Сделаем мир лучше!".</p>

              <h2>Проект - «Движение-Жизнь»</h2>
              <p>До недавнего времени бытовало мнение, что понятие "Инвалид", "физическая активность", а тем более "спорт" несовместимы.
                <br>
                Средства физической культуры рекомендовались только отдельным инвалидам как кратковременное мероприятие, дополняющее физиотерапевтические и медикаментозные назначения.
                <br>
                Физическая культура и спорт не рассматривались как эффективное средство реабилитации инвалидов, поддержания их физических возможностей и укрепления здоровья.
                <br>
                Хотя помогают психическому и физическому совершенствованию этой категории общества, способствуя их социальной интеграции, адаптации и физической реабилитации. </p>

              <h2>Проект - "Безбарьерная среда"</h2>
              <p>Приглашаем принять участие в проекте всех, кому не безразличны проблемы людей с ограниченными физическими возможностями.
                <br>
                Сделать это очень просто: размещайте на сайте информацию о доступных объектах; добавляйте фотографии с местами, где по вашему мнению есть необходимость сделать пандуса, или где они уже есть; комментируйте и оценивайте данные об опубликованных объектах.
                <br>

                Каждый желающий может поддержать развитие без барьерной среды, внести свой вклад в развитие общества без барьеров и стереотипов и тем самым окажет содействие развитию Паралимпийского движения. </p>

              <h2>«Прикоснись к сердцу ребенка!»</h2>
              <p>В рамках достигнутой договоренности с кардиохирургом России, членом Президиума РАМН, директором Центра сердечно - сосудистой хирургии им. Бакулева, членом Общественной палаты Российской Федерации Лео Бокерия и подписанного Соглашения между Ингушетией и Федеральным государственным бюджетным учреждением «Научный центр сердечно - сосудистой хирургии им. А.Н.Бакулева» РАМН, в республике проходит благотворительная акция «Прикоснись к сердцу ребенка». Основная цель акции – привлечение финансовой поддержки для оказания помощи детям с сердечно – сосудистой патологией В настоящий момент в Республике количество заболеваний сердечнососудистой системы насчитывается около 260 они нуждающимся в неотложном хирургическом лечении. Все желающие могут оказать посильную помощь больным детям и принять участие в благотворительной акции «Прикоснись к сердцу ребенка!».</p>
            </div>
            <div v-else class="content">
              <h2>Project "Gifts of generous people".</h2>
              <p>Our foundation will donate the most necessary things for people in need. The Foundation provides property assistance to families, but this direction is not a priority for us. Therefore, those of you who want to help things can use one of two formats:
                <br>

                Personally hand over all the children, having made the trip on their own, preliminary agree it with our coordinators or volunteers;
                <br>
                Bring things to the office of the Foundation "Myal", which is located in Magas, Nazarbayev street N15;
                <br>
                Take part in periodically held thematic promotions. For example, “It's time to School!”, “Good boomerang” or actions on the project “Make the world better!”.</p>

              <h2>Project - “Movement-Life”</h2>
              <p>Until recently, it was believed that the concept of "Invalid", "physical activity", and even more so "sport" are incompatible.
                <br>
                The means of physical culture were recommended only to certain persons with disabilities as a short-term measure complementing physiotherapeutic and medical appointments.
                <br>
                Physical culture and sports were not considered as an effective means of rehabilitating people with disabilities, maintaining their physical abilities and promoting health.
                <br>
                Although they help mental and physical improvement of this category of society, contributing to their social integration, adaptation and physical rehabilitation.</p>

              <h2>Project - "Barrier-free environment"</h2>
              <p>We invite everyone who is not indifferent to the problems of people with disabilities to take part in the project.
                <br>
                This is very easy to do: post information about available objects on the site; add photos with places where you think there is a need to make a ramp, or where they already exist; Comment and rate data on published objects.
                <br>

                Anyone can support development without a barrier environment, contribute to the development of a society without barriers and stereotypes and thereby contribute to the development of the Paralympic Movement.</p>

              <h2>"Touch the child's heart!"</h2>
              <p>In the framework of the agreement reached with the cardiac surgeon of Russia, a member of the Presidium of the Russian Academy of Medical Sciences, the director of the Center for Cardiovascular Surgery them. Bakulev, Member of the Public Chamber of the Russian Federation Leo Bokeria and the signed Agreement between Ingushetia and the Federal State Budgetary Institution "Scientific Center for Cardiovascular Surgery them. A.N. Bakulev "RAMS, in the republic is a charity event" Touch the Heart of a Child. " The main goal of the action is to attract financial support to help children with cardiovascular pathology. At present, there are about 260 diseases of the cardiovascular system in the Republic that they need urgent surgical treatment. Anyone can provide all possible assistance to sick children and take part in a charity event "Touch the Heart of a Child!"</p>
            </div>
          </section>
        </div>
      </div>
    </div>
</template>

<script>
    import Client from '~/components/Client'
    import _ from 'lodash'
    import jump from 'jump.js'
    import ClickOutside from 'vue-click-outside'

    export default {
        name: 'app',
        components: {
            Client
        },
        directives: {
            ClickOutside
        },
        data() {
            return {
                galleryModal: false,
                modalImage: '',

                galleryImages: [
                    {
                        name: 'picture 1',
                        src: '/uploads/gallery-1.jpg'
                    },
                    {
                        name: 'picture 2',
                        src: '/uploads/gallery-2.jpg'
                    },
                    {
                        name: 'picture 3',
                        src: '/uploads/gallery-3.jpg'
                    },
                    {
                        name: 'picture 4',
                        src: '/uploads/gallery-4.jpg'
                    },
                    {
                        name: 'picture 5',
                        src: '/uploads/gallery-5.jpg'
                    },
                    {
                        name: 'picture 6',
                        src: '/uploads/gallery-6.jpg'
                    },
                    {
                        name: 'picture 7',
                        src: '/uploads/gallery-7.jpg'
                    },
                    {
                        name: 'picture 8',
                        src: '/uploads/gallery-8.jpg'
                    },
                    {
                        name: 'picture 9',
                        src: '/uploads/gallery-9.jpg'
                    },
                    {
                        name: 'picture 10',
                        src: '/uploads/gallery-10.png'
                    },
                    {
                        name: 'picture 11',
                        src: '/uploads/gallery-11.jpg'
                    },
                    {
                        name: 'picture 12',
                        src: '/uploads/gallery-12.jpg'
                    },
                    {
                        name: 'picture 13',
                        src: '/uploads/gallery-13.png'
                    },
                ],
                gallerySliderBlock: [],
                contacts: {
                    phone: '+996 (555) 300555',
                    email: 'Janna@gmail.com',
                    address: 'Ул. Фрунзе 23 (пер. Белинская)',
                    schedule: 'с 09:00 до 17:00'
                },

                activeSlide: 1,
                showMenu: false,
                SFlickity: 'client',

                flickityOptions: {
                    initialIndex: 0,
                    prevNextButtons: false,
                    pageDots: false,
                    wrapAround: true
                },
                flickityOptionsComments: {
                    initialIndex: 0,
                    prevNextButtons: false,
                    wrapAround: true,
                    cellAlign: 'left',
                },

                planModal: false,
                ru: true
            }
        },
        methods: {
            hideMenu() {
                this.showMenu = false
            },
            showImage(imageSrc){
                this.modalImage = imageSrc
                this.galleryModal = !this.galleryModal
            },
            hideModal() {
                this.galleryModal = !this.galleryModal
            },
            nextGallery() {
                if(this.activeSlide === this.gallerySliderBlock.length){
                    this.activeSlide = 1
                }else{
                    this.activeSlide = this.activeSlide + 1;
                }
                this.$refs.flickity.next();
            },
            previousGallery() {
                if(this.activeSlide === 1){
                    this.activeSlide = 6
                }else{
                    this.activeSlide = this.activeSlide - 1;
                }
                this.$refs.flickity.previous();
            },
            selectSlideGallery(index){
                this.$refs.flickity.select(index-1);
                this.activeSlide = index;
                console.log(index)
            },

            nextComment() {
                this.$refs.flickityComments.next()
            },

            previousComment() {
                this.$refs.flickityComments.previous()
            },
            scrollSpy(target, scrollDuration){
                jump(target , {
                    duration: scrollDuration
                })
            }
        },
        created(){
            this.gallerySliderBlock = _.chunk(this.galleryImages, 8)
        },
        mounted() {
            this.SFlickity = 'flickity';

            switch(this.$mq){
                case 'mobileS': this.gallerySliderBlock = _.chunk(this.galleryImages, 4); break;
                case 'mobile': this.gallerySliderBlock = _.chunk(this.galleryImages, 4); break;
                case 'tablet': this.gallerySliderBlock = _.chunk(this.galleryImages, 6); break;
            }

        }
    }
</script>

<style lang="sass">

    .modal-fade-enter-active, .modal-fade-leave-active
        transition: all .3s ease

    .modal-fade-enter, .modal-fade-leave-to
        opacity: 0

    .touch-navbar-columns
      margin: 0

    .modal-card
      width: 1000px
      .modal-card-body
        overflow: scroll

    .language-button-wrap
      display: flex
      align-items: center
      justify-content: flex-end
      margin-bottom: 20px
      .language-button
        padding: 5px
        cursor: pointer
        background: lightseagreen
        border-radius: 5px
        border: none
        color: white
        outline: none
        box-shadow: none
        margin: 20px
        .is-active
          font-weight: bold
          font-size: 18px


    .main-header
        background: url(~assets/images/header-bg.jpg) center 0 no-repeat
        background-size: 100% auto
        .navbar
                background: none
                padding-bottom: 16px
                .navbar-brand
                    margin-left: 0 !important
                    padding-top: 16px
                    padding-bottom: 16px
                    .brand-logo
                        width: 161px
                        height: 82px
                        background: url(~assets/images/logo.png) center center no-repeat
                        background-size: contain
                    .navbar-burger
                        color: white
                        &.is-active

                .navbar-menu
                    margin-right: 0 !important
                    .navbar-end
                        .navbar-item
                            color: white
                            font-family: "Open Sans", sans-serif
                            font-size: 14px
                            text-transform: uppercase
                            background: transparent
                            padding: 0 22px 0 18px
                            margin-bottom: 21px
                            position: relative
                            &:after
                                content: ''
                                position: absolute
                                left: 25%
                                bottom: 33px
                                height: 1px
                                background-color: $red
                                width: 0
                                transition: width .25s
                            &:hover, &:focus, &:active
                                &:after
                                    width: 46%
                            &:last-child
                                padding-right: 0
                                background: none
                                &:after
                                    left: 27%
                                    width: 0
                                &:hover, &:focus, &:active
                                    &:after
                                        width: 64%
                .touch-navbar-wrap
                    position: absolute
                    width: 100%
                .touch-navbar-menu
                    margin-right: 0 !important
                    background: $black
                    border-radius: 5px
                    div:first-child
                        .navbar-item
                            margin-top: 10px
                    .navbar-item
                        color: white
                        font-family: "Open Sans", sans-serif
                        font-size: 14px
                        text-transform: uppercase
                        padding: 0 22px 0 18px
                        margin-bottom: 15px
                        position: relative
                        display: inline-block
                        background: none
                        &:after
                            content: ''
                            position: absolute
                            left: 25%
                            bottom: -4px
                            height: 1px
                            background-color: $red
                            width: 0
                            transition: width .25s
                        &:hover, &:focus, &:active
                            &:after
                                width: 46%

        .main-heading
            text-align: center
            padding: 100px 12px 148px 12px
            h1
                color: indigo
                font-family: "Cormorant Unicase", sans-serif
                font-size: 48px
                font-weight: bold
                text-transform: uppercase
                line-height: 72px
                padding-bottom: 45px
            h2
                font-weight: bold
                color: indigo
                font-family: "Myriad Pro", sans-serif
                font-size: 46px
                padding-bottom: 42px
            button
                font-family: "Open Sans", sans-serif
                font-size: 16px
                text-transform: uppercase
                color: white
                border: 0
                background: $blurRed
                padding: 17px 33px
                border-radius: 5px
                outline: none
                cursor: pointer
                transition: background-color .25s ease
                margin-bottom: 40px
                &:hover
                    background-color: $red

    .about-wrap
        .about-us
            padding: 0 12px
            .about-us-box
                background: white
                margin-top: -116px
                margin-bottom: -79px
                border-radius: 5px
                box-shadow: 10px 0 20px -10px rgba(1, 1, 1, 0.3), -10px 0 20px -10px rgba(1, 1, 1, 0.3)
                .about-top-blocks
                    display: flex
                    .about-block
                        flex: 1
                        &.image
                            align-self: flex-start
                            img
                                border-top-right-radius: 5px
                                border-bottom-right-radius: 5px
                        &.about-content
                            text-align: center
                            h2
                                font-family: "Cormorant Unicase", sans-serif
                                font-size: 36px
                                color: $blurRed
                                padding-top: 33px
                            p
                                font-family: "Open Sans", sans-serif
                                font-size: 16px
                                color: $darkGray
                                padding: 1px 20px 30px 20px
                            button
                                font-family: "Open Sans", sans-serif
                                font-size: 16px
                                color: $blurRed
                                border: 2px solid $blurRed
                                text-transform: uppercase
                                border-radius: 5px
                                background: none
                                padding: 15px 33px
                                margin-bottom: 30px
                                cursor: pointer
                                outline: none
                                transition: all .25s ease
                                &:hover
                                    color: white
                                    background: $blurRed
                .about-bottom-blocks
                    display: flex
                    .about-block
                        flex: 1
                        &.image
                            align-self: flex-end
                            img
                                border-top-left-radius: 5px
                                border-bottom-left-radius: 5px
                        &.about-content
                            text-align: center
                            h2
                                font-family: "Cormorant Unicase", sans-serif
                                font-size: 36px
                                color: $blurRed
                                padding-top: 18px
                            p
                                font-family: "Open Sans", sans-serif
                                font-size: 16px
                                color: $darkGray
                                padding: 1px 20px 20px 20px

        .how-we-do
            background: blueviolet
            background-size: auto 100%
            padding: 152px 12px 92px 12px
            h2
                color: white
                font-family: "Cormorant Unicase", sans-serif
                font-size: 36px
                font-weight: 400
                padding-bottom: 40px
            .issues
                .plan-image
                    width: 74px
                    height: 74px
                    background: url(~assets/images/plan.png) center center no-repeat
                    margin-bottom: 21px
                    background-size: contain
                .sketch-image
                    width: 74px
                    height: 74px
                    background: url(~assets/images/sketch.png) center center no-repeat
                    margin-bottom: 23px
                    background-size: contain
                .fitting-image
                    width: 74px
                    height: 74px
                    background: url(~assets/images/fitting.png) center center no-repeat
                    margin-bottom: 21px
                    background-size: contain
                h3
                    color: white
                    font-family: "Open Sans", sans-serif
                    font-size: 18px
                    font-weight: bold
                    padding-bottom: 4px
                p
                    color: white
                    font-family: "Open Sans", sans-serif
                    font-size: 16px
                    line-height: 20px
                    padding-bottom: 20px
        .what-we-do
            padding: 95px 12px 96px 12px
            h2
                color: $blurRed
                font-family: "Cormorant Unicase", sans-serif
                font-size: 36px
                font-weight: 400
                line-height: 48px
            p
                color: $darkGray
                line-height: 22px
                font-family: "Open Sans", sans-serif
                font-size: 16px
            .our-services
                .service-block
                    display: flex
                    justify-content: space-between
                    padding: 11px 0 12px 0
                    .service-icon.leather-icon
                        background: url(~assets/images/leather.png) center 0 no-repeat
                    .service-icon.dress-icon
                        background: url(~assets/images/dress.png) center 0 no-repeat
                    .service-icon.costume-icon
                        background: url(~assets/images/costume.png) center 0 no-repeat
                    .service-icon.knit-icon
                        background: url(~assets/images/knit.png) center 0 no-repeat
                    .service-icon.special-icon
                        background: url(~assets/images/special.png) center 0 no-repeat
                    .service-icon.curtains-icon
                        background: url(~assets/images/curtains.png) center 0 no-repeat
                    .service-icon.cleaner-icon
                        background: url(~assets/images/cleaner.png) center 0 no-repeat
                    .service-icon
                        flex-shrink: 0
                        width: 74px
                        height: 81px
                        margin-top: 6px
                        margin-right: 24px
                    .service-description
                        flex-basis: auto
                        h3
                            color: $darkGray
                            font-family: "Open Sans", sans-serif
                            font-size: 20px
                            font-weight: 600
                            padding-bottom: 4px
    .order-call
        background: black
        background-size: auto 100%
        text-align: center
        padding: 93px 0 88px 0
        h2
            color: white
            font-family: "Cormorant Unicase", sans-serif
            font-size: 36px
            font-weight: 400
        p
            color: white
            font-family: "Open Sans", sans-serif
            font-size: 18px
            padding-bottom: 28px
        form
            input
                width: 360px
                margin: 15px
                border: none
                border-radius: 5px
                color: white
                background: rgba(255, 255, 255, 0.5)
                font-family: "Open Sans", sans-serif
                font-size: 16px
                padding: 17px 26px
                outline: none
                &::placeholder
                    color: white
            button
                width: 286px
                margin: 15px
                border-radius: 5px
                border: none
                color: white
                background: $blurRed
                font-family: "Open Sans", sans-serif
                font-size: 16px
                text-transform: uppercase
                padding: 17px 26px
                outline: none
                cursor: pointer
                transition: background-color .25s ease
                &:hover
                    background-color: $red

    .gallery
        padding: 75px 12px
        background: $lightGray
        h2
            color: $lightBlack
            font-family: "Cormorant Unicase", sans-serif
            font-size: 36px
            font-weight: 600
            margin-bottom: 30px
        .gallery-slider
            width: 100%
            margin-bottom: 63px
            .carousel-cell
                width: 100%
                padding-left: 3px
                .gallery-image
                    width: 100%
                    box-shadow: 0 2px 6px gray
        .gallery-navigation
            padding-bottom: 19px
            button
                border: none
                outline: none
                cursor: pointer
            .button-prev
                width: 30px
                height: 30px
                background: url(~assets/images/gallery-prev-icon.png) left center no-repeat
                margin-right: 5px
            .button-dot
                width: 20px
                margin: 0 4px
                height: 30px
                background: url(~assets/images/passive-dot.png) center center no-repeat
                &.icon-is-active
                    background: url(~assets/images/active-dot.png) center center no-repeat
            .button-next
                width: 30px
                height: 30px
                background: url(~assets/images/gallery-next-icon.png) right center no-repeat
                margin-left: 5px
    .modal
        .modal-content
            width: 600px
            .image
                img
                    border-radius: 5px
    .comments
        background: blueviolet
        background-size: auto 100%
        padding: 75px 12px 125px 12px
        h2
            color: $lightGray
            font-family: "Cormorant Unicase", sans-serif
            font-size: 36px
            font-weight: 500
            text-align: center
            padding-bottom: 16px
        .comments-slider
            padding-top: 30px
            width: 100%
            position: relative
            .carousel-cell
                width: 50%
                .comment-box
                    background: $lightGray
                    border-radius: 5px
                    margin: 0 68px
                    display: flex
                    flex-direction: column
                    align-items: center
                    padding: 42px 30px 48px 30px
                    .comment-avatar
                        flex-shrink: 0
                        img
                            width: 200px
                            height: 200px
                            border-radius: 50%
                    .comment-body
                        text-align: center
                        padding-top: 9px
                        color: $lightBlack
                        font-family: "Open Sans", sans-serif
                        h3
                            font-size: 18px
                            font-weight: bold
                        p
                            line-height: 20px
                            font-size: 16px
            .navigation-buttons
                position: absolute
                top: 50%
                border: none
                width: 30px
                height: 30px
                cursor: pointer
                outline: none
                &.previous-button
                    background: url(~assets/images/comments-prev-icon.png) left center no-repeat
                    left: 0
                &.next-button
                    background: url(~assets/images/comments-next-icon.png) right center no-repeat
                    right: 0
            .flickity-page-dots
                bottom: -45px
                .dot
                    background: $lightGray
                    opacity: 1
                    width: 7px
                    height: 7px
                    margin: 0 10px
                    &.is-selected
                        background: $blurRed

    .contacts
        .contacts-box
            border-radius: 5px
            width: 100%
            background: white
            padding: 28px 30px
            box-shadow: 0 0 20px gray
            margin: 10px 0
            h2
                color: $lightBlack
                font-family: "Cormorant Unicase", sans-serif
                font-size: 36px
                font-weight: 500
                text-transform: uppercase
                padding-bottom: 11px
            .contacts-body
                padding-bottom: 48px
                p
                    color: $lightBlack
                    font-family: "Open Sans", sans-serif
                    font-size: 16px
            .follow-us
                p
                    color: gray
                    font-family: "Open Sans", sans-serif
                    font-size: 16px
                    padding-bottom: 15px
                .icon-link
                    display: flex
                    padding-bottom: 8px
                    .facebook-icon
                        margin-right: 25px
                        p
                            width: 33px
                            height: 33px
                            border-radius: 50%
                            background: url(~assets/images/facebook-icon.png) center center no-repeat
                    .twitter-icon
                        margin-right: 25px
                        p
                            width: 33px
                            height: 33px
                            border-radius: 50%
                            background: url(~assets/images/twitter-icon.png) center center no-repeat
                    .vk-icon
                        margin-right: 25px
                        p
                            width: 33px
                            height: 33px
                            border-radius: 50%
                            background: url(~assets/images/vk-icon.png) center center no-repeat
                    .instagram-icon
                        p
                            width: 33px
                            height: 33px
                            border-radius: 50%
                            background: url(~assets/images/instagram-icon.png) center center no-repeat

    footer
        background: $black
        padding: 60px 0
        p
            font-family: "Myriad Pro", sans-serif
            font-size: 17px
            font-weight: 500
            color: $textGray
            text-align: center



    +mobile
        .main-header
            background-size: auto 100%
            .main-heading
                h1
                    font-size: 28px
                    line-height: 42px
                h2
                    font-size: 28px
        .about-wrap
            .about-us
                .about-us-box
                    .about-top-blocks
                        display: block
                    .about-bottom-blocks
                        display: block
        .order-call
            form
                input
                    width: 300px
                button
                    width: 300px
        .comments
            .comments-slider
                .carousel-cell
                    width: 100%
                    .comment-box
                        display: block
                        margin: 0 40px
                        padding: 42px 10px 48px 10px
                        .comment-avatar
                            text-align: center
                        .comment-body
                            margin-left: 0
    +tablet
    +tablet-only
        .main-header
            .main-heading
                h1
                    font-size: 46px
        .order-call
            form
                input
                    width: 340px
    +touch
        .contacts
            .contacts-box
                left: 12px
    +desktop
    +desktop-only
    +widescreen
        .container
            max-width: 1140px
            width: 1140px
    +widescreen-only
    +fullhd


</style>
