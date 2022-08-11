<template>
  <div class="bg-white w-2/3 mx-auto overflow-y-auto flex justify-between">
    <div class="flex ml-4">
      <img src="../assets/pcn.png" height="100" width="100" alt="" />
      <h1 class="flex items-center mr-20 pl-4 text-4xl">PureCHIROnow</h1>
    </div>
    <div
      class="border-gray-200 border-2 p-6 ml-20 rounded-1 shadow-lg bg-white"
    >
      <h4 class="text-sm font-bold">Inter-office Message</h4>
      <p class="text-xs color-gray-200">
        This is space for inter office announcements and / or message. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Fuga soluta illum,
        neque adipisci, labore explicabo repudiandae alias quasi omnis assumenda
        eum quia tempore possimus nemo ut, in quod nam consequatur.
      </p>
    </div>
  </div>

  <div class="flex h-screen w-2/3 mx-auto mt-10 border-2 rounded-lg">
    <div class="w-2/3 h-auto">
      <div class="flex h-full flex-col">
        <header
          class="relative z-20 flex flex-none items-center justify-between border-b border-gray-200 py-4 px-6"
        >
          <div>
            <h1 class="text-lg font-semibold leading-6 text-gray-900">
              <time datetime="2022-01-22" class="sm:hidden">{{
                format(selectedDay, "MMMM dd")
              }}</time>
              <time datetime="2022-01-22" class="hidden sm:inline">{{
                format(selectedDay, "MMMM dd")
              }}</time>
            </h1>
            <p class="mt-1 text-sm text-gray-500"></p>
          </div>
          <div class="flex items-center">
            <div
              class="flex items-center rounded-md shadow-sm md:items-stretch"
            >
              <button
                type="button"
                class="flex items-center justify-center rounded-l-md border border-r-0 border-gray-300 bg-white py-2 pl-3 pr-4 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50"
                @click="prevDay()"
              >
                <span class="sr-only">Previous month</span>
                <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                class="hidden border-t border-b border-gray-300 bg-white px-3.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 focus:relative md:block"
                @click="currentDay()"
              >
                Today
              </button>
              <span class="relative -mx-px h-5 w-px bg-gray-300 md:hidden" />
              <button
                type="button"
                class="flex items-center justify-center rounded-r-md border border-l-0 border-gray-300 bg-white py-2 pl-4 pr-3 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50"
                @click="nextDay()"
              >
                <span class="sr-only">Next month</span>
                <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div class="hidden md:ml-4 md:flex md:items-center">
              <Menu as="div" class="relative">
                <MenuButton
                  type="button"
                  class="flex items-center rounded-md border border-gray-300 bg-white py-2 pl-3 pr-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                >
                  Day view
                  <ChevronDownIcon
                    class="ml-2 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </MenuButton>

                <transition
                  enter-active-class="transition ease-out duration-100"
                  enter-from-class="transform opacity-0 scale-95"
                  enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75"
                  leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95"
                >
                  <MenuItems
                    class="absolute right-0 mt-3 w-36 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <div class="py-1">
                      <MenuItem v-slot="{ active }">
                        <a
                          href="#"
                          :class="[
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm',
                          ]"
                          >Day view</a
                        >
                      </MenuItem>
                      <MenuItem v-slot="{ active }">
                        <a
                          href="#"
                          :class="[
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm',
                          ]"
                          >Week view</a
                        >
                      </MenuItem>
                      <MenuItem v-slot="{ active }">
                        <a
                          href="#"
                          :class="[
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm',
                          ]"
                          >Month view</a
                        >
                      </MenuItem>
                      <MenuItem v-slot="{ active }">
                        <a
                          href="#"
                          :class="[
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm',
                          ]"
                          >Year view</a
                        >
                      </MenuItem>
                    </div>
                  </MenuItems>
                </transition>
              </Menu>
              <div class="ml-6 h-6 w-px bg-gray-300" />
              <button
                type="button"
                class="ml-6 rounded-md border border-transparent bg-cyan-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add Appointment
              </button>
            </div>
            <Menu as="div" class="relative ml-6 md:hidden">
              <MenuButton
                class="-mx-2 flex items-center rounded-full border border-transparent p-2 text-gray-400 hover:text-gray-500"
              >
                <span class="sr-only">Open menu</span>
                <DotsHorizontalIcon class="h-5 w-5" aria-hidden="true" />
              </MenuButton>

              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="absolute right-0 mt-3 w-36 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <div class="py-1">
                    <MenuItem v-slot="{ active }">
                      <a
                        href="#"
                        :class="[
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm',
                        ]"
                        >Create event</a
                      >
                    </MenuItem>
                  </div>
                  <div class="py-1">
                    <MenuItem v-slot="{ active }">
                      <a
                        href="#"
                        :class="[
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm',
                        ]"
                        >Go to today</a
                      >
                    </MenuItem>
                  </div>
                  <div class="py-1">
                    <MenuItem v-slot="{ active }">
                      <a
                        href="#"
                        :class="[
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm',
                        ]"
                        >Day view</a
                      >
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <a
                        href="#"
                        :class="[
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm',
                        ]"
                        >Week view</a
                      >
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <a
                        href="#"
                        :class="[
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm',
                        ]"
                        >Month view</a
                      >
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <a
                        href="#"
                        :class="[
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm',
                        ]"
                        >Year view</a
                      >
                    </MenuItem>
                  </div>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </header>
        <div class="flex flex-auto overflow-hidden bg-white">
          <div ref="container" class="flex flex-auto flex-col overflow-y-auto">
            <div
              ref="containerNav"
              class="sticky top-0 z-10 grid flex-none grid-cols-7 bg-white text-xs text-gray-500 shadow ring-1 ring-black ring-opacity-5 md:hidden"
            >
              <button
                type="button"
                class="flex flex-col items-center pt-3 pb-1.5"
              >
                <span>W</span>
                <!-- Default: "text-gray-900", Selected: "bg-gray-900 text-white", Today (Not Selected): "text-indigo-600", Today (Selected): "bg-indigo-600 text-white" -->
                <span
                  class="mt-3 flex h-8 w-8 items-center justify-center rounded-full text-base font-semibold text-gray-900"
                  >19</span
                >
              </button>
              <button
                type="button"
                class="flex flex-col items-center pt-3 pb-1.5"
              >
                <span>T</span>
                <span
                  class="mt-3 flex h-8 w-8 items-center justify-center rounded-full text-base font-semibold text-indigo-600"
                  >20</span
                >
              </button>
              <button
                type="button"
                class="flex flex-col items-center pt-3 pb-1.5"
              >
                <span>F</span>
                <span
                  class="mt-3 flex h-8 w-8 items-center justify-center rounded-full text-base font-semibold text-gray-900"
                  >21</span
                >
              </button>
              <button
                type="button"
                class="flex flex-col items-center pt-3 pb-1.5"
              >
                <span>S</span>
                <span
                  class="mt-3 flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-base font-semibold text-white"
                  >22</span
                >
              </button>
              <button
                type="button"
                class="flex flex-col items-center pt-3 pb-1.5"
              >
                <span>S</span>
                <span
                  class="mt-3 flex h-8 w-8 items-center justify-center rounded-full text-base font-semibold text-gray-900"
                  >23</span
                >
              </button>
              <button
                type="button"
                class="flex flex-col items-center pt-3 pb-1.5"
              >
                <span>M</span>
                <span
                  class="mt-3 flex h-8 w-8 items-center justify-center rounded-full text-base font-semibold text-gray-900"
                  >24</span
                >
              </button>
              <button
                type="button"
                class="flex flex-col items-center pt-3 pb-1.5"
              >
                <span>T</span>
                <span
                  class="mt-3 flex h-8 w-8 items-center justify-center rounded-full text-base font-semibold text-gray-900"
                  >25</span
                >
              </button>
            </div>
            <div class="flex w-full flex-auto">
              <div class="w-14 flex-none bg-white ring-1 ring-gray-100" />
              <div class="grid flex-auto grid-cols-1 grid-rows-1">
                <!-- Horizontal lines -->
                <div
                  class="col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-100"
                  style="grid-template-rows: repeat(48, minmax(3.5rem, 1fr))"
                >
                  <div ref="containerOffset" class="row-end-1 h-7"></div>
                  <div>
                    <div
                      class="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400"
                    >
                      12AM
                    </div>
                  </div>
                  <div />
                  <div>
                    <div
                      class="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400"
                    >
                      1AM
                    </div>
                  </div>
                  <div />
                  <div>
                    <div
                      class="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400"
                    >
                      2AM
                    </div>
                  </div>
                  <div />
                  <div>
                    <div
                      class="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400"
                    >
                      3AM
                    </div>
                  </div>
                  <div />
                  <div>
                    <div
                      class="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400"
                    >
                      4AM
                    </div>
                  </div>
                  <div />
                  <div>
                    <div
                      class="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400"
                    >
                      5AM
                    </div>
                  </div>
                  <div />
                  <div>
                    <div
                      class="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400"
                    >
                      6AM
                    </div>
                  </div>
                  <div />
                  <div>
                    <div
                      class="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400"
                    >
                      7AM
                    </div>
                  </div>
                  <div />
                  <div>
                    <div
                      class="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400"
                    >
                      8AM
                    </div>
                  </div>
                  <div />
                  <div>
                    <div
                      class="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400"
                    >
                      9AM
                    </div>
                  </div>
                  <div />
                  <div>
                    <div
                      class="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400"
                    >
                      10AM
                    </div>
                  </div>
                  <div />
                  <div>
                    <div
                      class="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400"
                    >
                      11AM
                    </div>
                  </div>
                  <div />
                  <div>
                    <div
                      class="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400"
                    >
                      12PM
                    </div>
                  </div>
                  <div />
                  <div>
                    <div
                      class="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400"
                    >
                      1PM
                    </div>
                  </div>
                  <div />
                  <div>
                    <div
                      class="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400"
                    >
                      2PM
                    </div>
                  </div>
                  <div />
                  <div>
                    <div
                      class="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400"
                    >
                      3PM
                    </div>
                  </div>
                  <div />
                  <div>
                    <div
                      class="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400"
                    >
                      4PM
                    </div>
                  </div>
                  <div />
                  <div>
                    <div
                      class="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400"
                    >
                      5PM
                    </div>
                  </div>
                  <div />
                  <div>
                    <div
                      class="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400"
                    >
                      6PM
                    </div>
                  </div>
                  <div />
                  <div>
                    <div
                      class="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400"
                    >
                      7PM
                    </div>
                  </div>
                  <div />
                  <div>
                    <div
                      class="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400"
                    >
                      8PM
                    </div>
                  </div>
                  <div />
                  <div>
                    <div
                      class="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400"
                    >
                      9PM
                    </div>
                  </div>
                  <div />
                  <div>
                    <div
                      class="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400"
                    >
                      10PM
                    </div>
                  </div>
                  <div />
                  <div>
                    <div
                      class="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400"
                    >
                      11PM
                    </div>
                  </div>
                  <div />
                </div>

                <!-- Events -->
                <ol
                  class="col-start-1 col-end-2 row-start-1 grid grid-cols-1"
                  style="
                    grid-template-rows: 1.75rem repeat(288, minmax(0, 1fr)) auto;
                  "
                ></ol>
              </div>
            </div>
          </div>
          <div
            class="hidden w-1/2 max-w-md flex-none border-l border-gray-100 py-10 px-8 md:block"
          >
            <div class="flex items-center text-center text-gray-900">
              <button
                type="button"
                @click="lastMonth"
                class="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span class="sr-only">Previous month</span>
                <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
              </button>
              <div class="flex-auto font-semibold">{{ currentMonth }}</div>
              <button
                type="button"
                @click="nextMonth"
                class="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span class="sr-only"></span>
                <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div
              class="mt-6 grid grid-cols-7 text-center text-xs leading-6 text-gray-500"
            >
              <div>S</div>
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
            </div>
            <div
              class="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200"
            >
              <button
                v-for="(day, dayIdx) in days"
                :key="day.toString()"
                type="button"
                @click="setSelectedDay(day)"
                :class="[
                  'py-1.5 hover:bg-gray-100 focus:z-10',
                  isSameMonth(day, today) ? 'bg-white' : 'bg-gray-50',
                  (isEqual(day, selectedDay) || isToday(day)) &&
                    'font-semibold',
                  isEqual(day, selectedDay) && 'text-white',
                  !isEqual(day, selectedDay) &&
                    isSameMonth(day, today) &&
                    !isToday(day) &&
                    'text-gray-900',
                  !isEqual(day, selectedDay) &&
                    !isSameMonth(day, today) &&
                    !isToday(day) &&
                    'text-gray-400',
                  isToday(day) &&
                    !isEqual(day, selectedDay) &&
                    'text-indigo-600',
                  dayIdx === 0 && 'rounded-tl-lg',
                  dayIdx === 6 && 'rounded-tr-lg',
                  dayIdx === days.length - 7 && 'rounded-bl-lg',
                  dayIdx === days.length - 1 && 'rounded-br-lg',
                ]"
              >
                <time
                  :datetime="format(day, 'MMMM-dd-yyyy')"
                  :class="[
                    'mx-auto flex h-7 w-7 items-center justify-center rounded-full',
                    isEqual(day, selectedDay) &&
                      isToday(day) &&
                      'bg-indigo-600',
                    isEqual(day, selectedDay) && !isToday(day) && 'bg-gray-900',
                  ]"
                >
                  {{ format(day, "d") }}
                </time>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Begin Upcoming Appointment column-->
<section class="mt-12 md:mt-0 md:pl-14">
      <h2 class="font-semibold mt-5 text-gray-900">Upcoming Appointments<!--Appointments for <time datetime="{{format(selectedDay, 'yyyy-MM-dd')}}">{{format(selectedDay, 'MMM dd yyyy')}}</time>--></h2>
      <ol class="mt-4 space-y-1 text-sm leading-6 text-gray-500">
        <li v-for="meeting in sortedMeetings" :key="meeting.id" class="group flex items-center space-x-4 rounded-xl py-2 px-4 focus-within:bg-gray-100 hover:bg-gray-100">
          <img :src="meeting.imageUrl" alt="" class="h-10 w-10 flex-none rounded-full" />
          <div class="flex-auto">
            <p class="text-gray-900">{{ meeting.name }}</p>
            <p class="text-gray-900">{{ format(parseISO(meeting.startDatetime, new Date()), 'MMM dd yyyy') }}</p>
            <p class="mt-0.5">
              <time :datetime="meeting.startDatetime">{{ format(parseISO(meeting.startDatetime, new Date()), 'hh:mm a') }}</time> -
              <time :datetime="meeting.endDatetime">{{ format(parseISO(meeting.endDatetime, new Date()), 'hh:mm a') }}</time>
            </p>
          </div>
          <Menu as="div" class="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100">
            <div>
              <MenuButton class="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600">
                <span class="sr-only">Open options</span>
                <DotsVerticalIcon class="h-6 w-6" aria-hidden="true" />
              </MenuButton>
            </div>
          </Menu>
        </li>
      </ol>
    </section>
  </div>
  <div class="bg-slate-600 w-full flex justify-between p-10">
    <h1 class="text-white">Email: dochoskins.com</h1>
    <h1 class="text-white">(555) 555-5555</h1>
    <h1 class="text-white">125 Donut Way, Inman SC 55555</h1>
  </div>
</template>

<script setup>
import { ref,reactive, onMounted, computed } from "vue";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DotsHorizontalIcon,
  DotsVerticalIcon
} from "@heroicons/vue/solid";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import {
  eachDayOfInterval,
  endOfMonth,
  format,
  startOfToday,
  endOfWeek,
  isToday,
  isSameMonth,
  isEqual,
  add,
  parse,
  parseISO
} from "date-fns";
import { useState } from "../composables/state.js";
let today = startOfToday();
let [selectedDay, setSelectedDay] = useState(today);
let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
let firstDayCurrentMonth = ref(
  parse(currentMonth.value, "MMM-yyyy", new Date())
);
console.log("FDCM outside", firstDayCurrentMonth.value);
let currentMonthStartDay = -firstDayCurrentMonth.value.getDay();
let days = ref(
  eachDayOfInterval({
    start: add(firstDayCurrentMonth.value, { days: currentMonthStartDay }),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth.value)),
  })
);
const nextMonth = () => {
  let firstDayCurrentMonth = ref(
    parse(currentMonth.value, "MMM-yyyy", new Date())
  );
  let firstDayNextMonth = add(firstDayCurrentMonth.value, { months: 1 });
  setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  currentMonthStartDay = -firstDayNextMonth.getDay();
  days.value = eachDayOfInterval({
    start: add(firstDayNextMonth, { days: currentMonthStartDay }),
    end: endOfWeek(endOfMonth(firstDayNextMonth)),
  });
};
const lastMonth = () => {
  let firstDayCurrentMonth = parse(currentMonth.value, "MMM-yyyy", new Date());
  let firstDayLastMonth = add(firstDayCurrentMonth, { months: -1 });
  setCurrentMonth(format(firstDayLastMonth, "MMM-yyyy"));
  currentMonthStartDay = -firstDayLastMonth.getDay();
  days.value = eachDayOfInterval({
    start: add(firstDayLastMonth, { days: currentMonthStartDay }),
    end: endOfWeek(endOfMonth(firstDayLastMonth)),
  });
};
const prevDay = () => {
  setSelectedDay(add(selectedDay.value, { days: -1 }));
};
const nextDay = () => {
  setSelectedDay(add(selectedDay.value, { days: 1 }));
};
const currentDay = () => {
  setSelectedDay(startOfToday());
  setCurrentMonth(format(today, "MMM-yyyy"));

  firstDayCurrentMonth.value = parse(
    currentMonth.value,
    "MMM-yyyy",
    new Date()
  );
  let currentMonthStartDay = -firstDayCurrentMonth.value.getDay();
  days.value = eachDayOfInterval({
    start: add(firstDayCurrentMonth.value, { days: currentMonthStartDay }),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth.value)),
  });
};

const meetings = reactive([
  {
    id: 1,
    name: 'Leslie Alexander',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '2022-10-11T13:00',
    endDatetime: '2022-10-11T14:30',
  },
  {
    id: 2,
    name: 'Michael Foster',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '2022-09-20T09:00',
    endDatetime: '2022-09-20T11:30',
  },
  {
    id: 3,
    name: 'Dries Vincent',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '2022-08-20T17:00',
    endDatetime: '2022-08-20T18:30',
  },
  {
    id: 4,
    name: 'Leslie Alexander',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '2022-09-09T13:00',
    endDatetime: '2022-09-09T14:30',
  },
  {
    id: 5,
    name: 'Michael Foster',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '2022-09-13T14:00',
    endDatetime: '2022-09-13T14:30',
  },
])

const sortedMeetings = computed(() => {
   meetings.sort((a,b) => {
    return new Date(a.startDatetime) - (new Date(b.startDatetime))
  })
    return meetings
})
const container = ref(null);
const containerNav = ref(null);
const containerOffset = ref(null);
onMounted(() => {
  // Set the container scroll position based on the current time.
  const currentMinute = new Date().getHours() * 60;
  container.value.scrollTop =
    ((container.value.scrollHeight -
      containerNav.value.offsetHeight -
      containerOffset.value.offsetHeight) *
      currentMinute) /
    1440;
});
</script>