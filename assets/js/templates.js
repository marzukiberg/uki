class ProjectCard extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = this.template();
  }
  template() {
    return `
        <div class="rounded-md border  h-full shadow bg-white duration-300 hover:shadow-lg flex flex-col justify-between wow bounceIn" x-data="{hover: false}">
            <div @mouseover="hover = true" @mouseover.outside="hover = false">
                <div class="relative border ">
                    <img
                    :src="'assets/images/projects/'+item.img"
                    alt="project"
                    class="w-full h-80 rounded-md duration-300 object-contain"
                    />
                    <template x-if="item.link !== '#'">
                        <a :href="item.link" target="_blank" class="absolute right-0 bottom-0 p-6 rounded-tl-lg flex justify-center items-center text-3xl text-blue-500 bg-white bg-opacity-50 duration-300 hover:bg-opacity-100" x-show="hover" x-transition x-transition.scale.100 x-transition.scale.origin.bottom x-transition.duration.300ms>
                        <i class="fa fa-external-link-alt" aria-hidden="true"></i></a>
                    </template>
                </div>
                <div class="p-6 space-y-3">
                    <h4 class="tracking-wider uppercase text-xl font-bold" x-text="item.title"></h4>
                    <p class="text-lg" x-text="item.text"></p>
                </div>
            </div>
            <div class="p-3 flex justify-center text-lg space-x-3 bg-purple-500 text-white rounded-md">
                <template x-for="stack in item.stacks">
                <span x-text="'#'+stack"></span>
                </template>
            </div>
        </div>
        `;
  }
}

class Navbar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = this.template();
  }

  template() {
    return `
            <nav class="navbar bg-white shadow-lg fixed top-0 left-0 w-full z-50" x-data="{ open: false, navLinks: ['home','about','services','portfolio'] }">
                <div class="container mx-auto max-w-6xl flex items-center justify-between p-3">
                <a href="#" class=" inline-flex items-center text-2xl font-bold uppercase tracking-widest">marzuki</a>
                <div class="hidden md:flex lg:hidden">
                    <template x-for="item in navLinks.slice(0,3)">
                    <a :href="item==='home'?'#':'#'+item" class="block p-3 hover:text-blue-400 duration-300 uppercase" x-text="item"
                    ></a>
                    </template>
                </div>
                <div class="hidden lg:flex">
                    <template x-for="item in navLinks">
                    <a :href="item==='home'?'#':'#'+item" class="block p-3 hover:text-blue-400 duration-300 uppercase" x-text="item"
                    ></a>
                    </template>
                </div>

                <button
                    class="w-11 h-11 flex items-center justify-center text-xl lg:hidden"
                    @click="open = !open"
                >
                    <i :class="open?'fa fa-times':'fa fa-bars'" aria-hidden="true"></i>
                </button>
                </div>

                <div class="absolute top-full left-0 w-full bg-white tracking-wider shadow-lg duration-300 origin-top" x-show="open" x-transition:enter-start="opacity-0 transform scale-y-0" x-transition:enter-end="opacity-100 transform scale-y-100" x-transition:leave-start="opacity-100 transform scale-y-100" x-transition:leave-end="opacity-0 transform scale-y-0" @click.outside="open = !open" >
                    <template x-for="(item, index) in navLinks">
                        <a :href="item==='home'?'#':'#'+item" class=" block p-3 hover:text-blue-400 duration-300 border-b border-gray-200 uppercase " x-text="item" ></a>
                    </template>
                </div>
            </nav>
        `;
  }
}

customElements.define('project-card', ProjectCard);
customElements.define('app-navbar', Navbar);
