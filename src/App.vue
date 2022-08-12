<script lang="ts" setup></script>

<template>
  <!-- <HButton>Hovey Button</HButton>
  <SFCButton />
  <JSXButton /> -->
  <div class="my-3">
    <HButton size="small" color="blue">蓝色按钮</HButton>
    <HButton size="medium" color="green">绿色按钮</HButton>
    <HButton size="large" icon="search" color="gray">灰色按钮</HButton>
    <HButton size="medium" color="yellow">黄色按钮</HButton>
    <HButton size="small" color="red">红色按钮</HButton>
  </div>

  <div class="my-3">
    <HButton color="blue" plain>朴素按钮</HButton>
    <HButton color="green" plain>绿色按钮</HButton>
    <HButton color="gray" plain>灰色按钮</HButton>
    <HButton color="yellow" plain>黄色按钮</HButton>
    <HButton color="red" plain>红色按钮</HButton>
  </div>

  <div class="my-3">
    <HButton size="small" plain>小按钮</HButton>
    <HButton size="medium" plain>中按钮</HButton>
    <HButton size="large" plain>大按钮</HButton>
  </div>
  <div class="my-3">
    <HButton color="blue" round plain icon="search">搜索按钮</HButton>
    <HButton color="green" round plain icon="edit">编辑按钮</HButton>
    <HButton color="gray" round plain icon="check">成功按钮</HButton>
    <HButton color="yellow" round plain icon="message">提示按钮</HButton>
    <HButton color="red" round plain icon="delete">删除按钮</HButton>
  </div>

  <div class="my-3">
    <HButton color="blue" round plain icon="search"></HButton>
    <HButton color="green" round plain icon="edit"></HButton>
    <HButton color="gray" round plain icon="check"></HButton>
    <HButton color="yellow" round plain icon="message"></HButton>
    <HButton color="red" round plain icon="delete"></HButton>
  </div>
</template>

<style scoped></style>
