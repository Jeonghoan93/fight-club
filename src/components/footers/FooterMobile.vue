<script lang="ts">
export default {
  name: "FooterMobile",
};
</script>

<template>
  <div
    class="w-full border-t-[2px] fixed bottom-0 bg-gray-50 shadow-md h-[60px] transition-transform duration-500"
  >
    <div className="flex justify-around items-center h-full px-4">
      <div className="flex flex-col items-center cursor-pointer">
        <span><Icon name="uil:home" color="black" size="20" /></span>
        <span class="font-semibold text-[10pt] text-gray-700">Home</span>
      </div>

      <div className="flex flex-col items-center cursor-pointer">
        <span><Icon name="uil:heart" color="black" size="20" /></span>
        <span class="font-semibold text-[10pt] text-gray-700">Favorites</span>
      </div>

      <div className="flex flex-col items-center cursor-pointer">
        <span><Icon name="uil:book" color="black" size="20" /></span>
        <span class="font-semibold text-[10pt] text-gray-700">Activity</span>
      </div>

      <div className="flex flex-col items-center cursor-pointer">
        <span><Icon name="uil:user" color="black" size="20" /></span>
        <span class="font-semibold text-[10pt] text-gray-700">Account</span>
      </div>
    </div>
  </div>
</template>
