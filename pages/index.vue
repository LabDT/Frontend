<template>
  <div>
    <footer>
      <div class="content">
        <p class="copyright">{{ t('footer.copyright', {
          year: new Date().getFullYear(), 
          version: appVersion,
        }) }}</p>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { useRuntimeConfig } from 'nuxt/app';

const { t } = useI18n({
  useScope: 'local'
});

const config = useRuntimeConfig();
const appVersion = config.public.appVersion;
</script>

<style lang="sass" scoped>
div
  height: 100%
  width: 100%

footer
  @include gradient($color-primary, $color-secondary, 135deg)
  display: flex
  width: 100%
  justify-content: center
  align-items: center

  .content
    padding: 20px
    width: 95%
    max-width: 1200px

    .copyright
      @include font-primary(500)
      font-size: 16px
      color: #FFFFFFBB

@media (min-width: 1600px)
  footer .content
    width: 50%

@media (min-width: 1024px) and (max-width: 1599px)
  footer .content
    width: 66%

@media (max-width: 768px)
  footer .content
    width: 95%

</style>