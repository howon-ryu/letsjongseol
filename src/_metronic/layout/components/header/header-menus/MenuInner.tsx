/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'

export function MenuInner() {
  return (
    <>
      <div
        className='header__navi_logo'
        css={css`
          display: flex;
          align-items: center;
        `}
      >
        <img alt='Logo' src='/media/logos/logo.png' className='h-25px app-sidebar-logo-default' />
        <span
          className='fw-normal fs-5 ver_txt'
          css={css`
            display: inline-block;
            margin-left: 8px;
          `}
        >
          ADMIN
        </span>
      </div>
    </>
  )
}
