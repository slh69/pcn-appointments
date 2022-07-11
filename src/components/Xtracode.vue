    <div class="bg-white w-2/3 mx-auto overflow-y-auto flex justify-between">
      <div class="flex ml-4">
        <img src="../assets/pcn.png" height='100' width='100' alt="">
        <h1 class="flex items-center mr-20 pl-4 text-4xl">PureCHIROnow</h1>
      </div>
      <div class="border-gray-200 border-2 p-6 ml-20 rounded-1 shadow-lg bg-white">
        <h4 class="text-sm font-bold">Inter-office Message</h4>
        <p class="text-xs color-gray-200 ">This is space for inter office announcements and / or message. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga soluta illum, neque adipisci, labore explicabo repudiandae alias quasi omnis assumenda eum quia tempore possimus nemo ut, in quod nam consequatur.</p>
      </div>
    </div>

    :class="['py-1.5 hover:bg-gray-100 focus:z-10', day.isCurrentMonth ? 'bg-white' : 'bg-gray-50', (day.isSelected || day.isToday) && 'font-semibold', day.isSelected && 'text-white', !day.isSelected && day.isCurrentMonth && !day.isToday && 'text-gray-900', !day.isSelected && !day.isCurrentMonth && !day.isToday && 'text-gray-400', day.isToday && !day.isSelected && 'text-indigo-600', dayIdx === 0 && 'rounded-tl-lg', dayIdx === 6 && 'rounded-tr-lg', dayIdx === days.length - 7 && 'rounded-bl-lg', dayIdx === days.length - 1 && 'rounded-br-lg']"