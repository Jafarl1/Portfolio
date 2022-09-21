const initState = {
    projects: [
        {
            id: 1,
            heading: 'JavaScript',
            type: 'js',
            name: 'Tods',
            link: 'https://tods-lilac.vercel.app/',
            image: 'https://lh3.googleusercontent.com/qAgGfyZBmzJKCtU9uTavEqSqfT1VGnpE35IF6XnYnWLh16gOD-r98_taUlsFUx2Wi1iIJN3HuF52fc3wizCLJHcPMNArBNk944nvXRVWYxf6dS2FMw8bSnNqA0CnD833qHDz5TF9sWpsQPVr-C652QvoO16x4WzUSQnVFOnxr0_GRvbtAsHMKembdLBI24axloghOdyEdVoeGvgj4qUdoj_z1AM7u0pI5XU4AhtVNogsF6lJWv3AW5c3JBQu02klWN4yWXQoJ4EinEpaR0h2ogqXnok1MXroCarqtcu520Gw0my8erZoArLOSmVODM3s49z4697im-WOCJZ1IwzSK4iFySCMdA-YxsayUi5wnE8n2ZJle-vqVNsPW4b0tVSq1wNk0QsPVUgbuAKRtZg5B4qcJNSWqEAFMPi_vZaMsizaDOryH3g24PLc_N7hYTPIVvqxlhBz0m3ZrGlxWiStvTTEYH6R1f0a58wjg8KSW4CT1Sbx1IqjatuY_NPMjZPh_rqUUsbx5EJCHytEIO84oHOZh8-fo0JD_SXVuQ7I_hkF_N_K6tA3t_1Tn08MLvU3NYXT-wNG9ExeFZqhF_DEQcOiDddMJSnbCgmKSaGhMBse-9YVIh1f2b31Q8lNUDAblCZD-A6OolbFrjbd4BEyaXCIGIw8y-lW0GAQDz9PcRd6ic-sWS9l2wg0-L7UTDbIXwJolgSaYmmziS83Jjv0s551rf9gm1xvTMhDxanlDCxm3KqldBnPDe7FVL7NKjkb0eztze6u0mXBGvAJvGc83zli6S2ZrXbkCvGb7YYkRRLoVAhGKQwbfXO6xL0hMdFpMRJwc3gUvpq9o_mHg5CdnMO9b_8gY2FIdJj-G9PLKTGbKyYe3vMiTeoFGjkNMTCPcEPJSyGUyxDFfxQVqyzY2eiAYHX29o4mtpBJiQ=w1892-h894-no?authuser=0'
        },
        {
            id: 2,
            type: 'js',
            heading: 'JavaScript',
            name: 'Color Selector',
            link: 'https://random-color-selector.vercel.app/',
            image: 'https://lh3.googleusercontent.com/YBhBpT7k-LwNqx8Y7MV_vTSINreMayyEYsDPtrvEGv1oXTS77pFSIJXJblGumILhW0tVb078F73HDFMh51z4BBNtNfVD_whz5StZzts4-XJK6Pb_miMO8hDVd3Z_gFeXnKKIJRcsiu10bUuTGGz-dKCmJt6C0nKSEqcjRxuomOrrUsOSEQpU0uwdDZOo6R349VcLwIlReXtl72Epe5CgsepLVUaXiFixmkyoxw6nz5-JdjPp6epoY0uEY_isiruQVVC8j9gVc-vWxn2f-P0hTqqq_g34RNDGMvWbgfTKcgYf7v_7MKklGllyL_XNkOEkBFvQ4sYidbSijEOKPtVrqQhQy9R4rFfRO_4dTxW00qVilGCw4SvQLasCJTpWSUpB0b8a6quzFkx1RRZwvHTMoFvdWEr01i8ZwRKY6dEwYf2IqBAgyjWN3_mrsHitSoN932vBZKK32l-NA4BYqZ-k_RZM7S_G7RI7nJ32B9Ze5Mx2pXJunesc7nCAN4wNFbTy4PK0ptojoLcwJoasC6-4qYkyav6Eh20NTEL36DSUw-Axej0Mi_9iCwip1OTFYfY1CAjgEvTZBFDqx0KmUBDQ4GwxY6n5Y9UfBW-GslDF-JlRZuS79x89JfWNAzjemL_oyV07BTzjFjXPTV4LffGm5JBruB5FrJTVVhwVwLUbcYmKAur2fDx9iyktkFmV3q40VA1KEV3wQKgogqFNfqPUeVk6fnJ8hkJWYqAei4vFbFoEvARNU4xe41-0ncPtao5dKyXI8l3JLGFf2IgIwooMdEeYo_IAJvzSWCNn4Z4iO8Vpp3LLRH8WIBcHvS-0ryXEbf4hbqVF0sUd37mJ9MvxYUsIo2Dj9dRhOHjUHKBndV2oxIllOm2vtUWZiQiQCORY0IUjHn9UjUNV8pXPeT8TYC5ody7N7x7she9bRw=w1917-h901-no?authuser=0'
        },
        {
            id: 3,
            type: 'js',
            heading: 'JavaScript',
            name: 'Exchange',
            link: 'https://exchange-hazel-five.vercel.app/',
            image: 'https://lh3.googleusercontent.com/jJ1JRoYukzaJZbbEd2ZqWMSvOaTRY55x14b_ZvowIZXtkKZxANQSi0d4isu_l2bIkb5xl4u02LeAR2tEe9MTI4tUXvk9D4XxL3ZRBa84b2BkUiYveCM-PtPZA29Chdtt3qcXnolmBhoU931Gi2NQYdPxSWbqh6L2M39x6OkR6EJKUnnEn23sLgyh1OsRWcz5HI6srEd8GVJdgZhORGjDjF4FkXKoYiG_E-hTV_woKphVgR7HEMRnyuWIVhIMZ3nnuoKalnZeElV2nNqtfeaPOA9Q9ihXQjvvHmfA8MSPubJktXzSRZVYlPSC2rexsP6EuUOhblFmkgZR7bRMzSZ-vUF1agxm2fbDrueGRDzV-ztHUsS41gLzcj1eQ69iPz6gZNU5qdkl3GW5_UvIpKzartMh0ySOR781FirXpULkO9kChIk-8gNJ4uQUJBVqn1suZiFJIKUXi3VtxmpYbCI-OlvBmEy3bJpo06PpjCKqXMPvXg7TNSYrzURuoy5etXEPDsNftU1XI6C2Cx4MVddq-dS4vbikd2GrZbYF_tth6dSdb7PrTir5V9Z6G1TbvFRGfRuFf5Frn9apwuYxn4Ya4sX3Han2QlnIKx0PbuVMRWla89GX_I-5LDixhSwgn2qMPARWT0ta1eEkJa3cZBOntLE_wyA4hnRRHX8_20nPUiegglP_x3I9Y5_FGIgKGEIDssc1RB6SuDOnBUE5ABz9KWGW_5-YJmDltQJQ8nkae2ypXmAUjT4iMv7BC3Y=w1919-h897-no?authuser=0'
        },
        {
            id: 4,
            type: 'react',
            heading: 'React Js',
            name: 'Gloriosa',
            link: 'https://gloriosa.vercel.app/',
            image: 'https://lh3.googleusercontent.com/o5eMtj3vCuOUpqZGQ9BT6ny_XDI5j7VcM5akFyeOGxbge2lafWX-Iz7QJKwFYXrHVq7buB903wsUIeN_psiXCjxinLOKYUuzuagGlOpeaDs-5nd_rSWfReFYbn1658m-Z1215lyHuffyI3fPoJE2A5N4SlTQ8sCX_qJgeb-AzrU6V9GNx42zyFr3QYueVnBT1FGWzaDBL90g2KGEsxm9Dl_UcIuvAWPCM-bRMUvwBnr5drnStTXC5qGGcaJfqKDUJXmX-vepWO3-xRETmxHMSZfx0vg1oH7Dj7CZ-DbUijH_9Cg4wzw3qAIkkJi3V5J3g-cZov3QdzFDlPkBqWsEXYiLrhW1RfqYsjdztWxQDhTwOJGvWc2q36x2Dvh2JmiIcqjdw6dDfBQ4MgxmA6ESZKK60zchMOTYbw3tWbRIBumNbqc7YsE7EXc5yaHn7O30iT2bgG8wbkbotqd7PpzUrUwisTXSNZSFAnypZ4QEs0R9Cw5m-uoackPmhPte-UmkyVARzcyV9cyyih0s8N9lGscDpDOOkw5Ubsk25Y3ct_dy0FWNAOKkO8vtz5zHTwNZI3388axAPGQWobGip4jVW1nd-Q7ch_QfUnr9EJhlfSZ5eNlBV2qxn-ZgcgsNpw9owzWEV0nYdX6mXCfN10ahmhRKQ5XYQSQyNtV-IfPdZNEwWYlwNkDIQ3mEAxPcY1cbYzLkDzv3DVT9nRPmZwUKMYrJNeeQXutD8TKZYAlOsMR2vsmpSZg2GGWCFUWqzKifceFn1DrF5O81vQMdyjffThAMVund2A-i1MxtAljiz0kNlTpAVHZLcRuVu1tGubDizUrw8djpUkHZ3_86HvJ14VDFjXbrMg2XKy0-E3OT_pWZDjGnOykIPdmQwyE9oG-ijDwUL6zPsk-VnNgNrd9ilnPWK-9Ur56TvqgqKA=w1891-h898-no?authuser=0'
        },
        {
            id: 5,
            type: 'react',
            heading: 'React Js',
            name: 'Tickets Filter',
            link: 'https://tickets-filter-sooty.vercel.app/',
            image: 'https://lh3.googleusercontent.com/vPwrHBvsw4tXRj9504T9aXGZW31M8IEyTUOifSrgiKSmPXbn7LIjypnLJ6pBbDIwOL4PhXlkpFsulHDJp3brv7UAjNtnEc-siNdjZRj_SisfZNDXIOzfzqCJKnH1TsAgdlrU8xTjU5RttWJZW0wJcYOxrvQVkm9tp0pg6E35hdKA-OdaLymd9trjBHe8_jOP7nh87nyeVkoxB6R-BbLp3TcKUteuMVlHyV_pk-CkHbjcLLEZp_ZWqK7EI3trHLLibBqbWlpWEAMI_kDXm8bl9EPOXx_eXS8eYgSr114nCSQKx1c2oddQvMBIBNJtly7pBlRHhIHoCmIDGM5ZlIj4BWybTR6Zxe_wTHm-19R2DHDL8vCC4nU8bGU3VpJ--gY_T3OVTW9wswpgjavBdqm7uAO4hxyeyJdsA8dTXQ69vXLipCtq1nFXJy7JHwx-AlY06v6dmIwy8M7vOx3SZUMs7WY5AmmG-af5FJKucED69TjM8N7a7osWECtQtDI8Za_XoJoyfwlZg0Fz_-FUNA-sKTHEZnyGYmgYcEOPh4LWmvB1QXRExc4ja-TUmDpzeARb05mGkRXeY6L7A8GMZW7YqpJGHHIFuqAoinnSqjKzFWJCwNVc5e0TF9EileYsRILo_AY8jTnBMM_b8PzeG4XtMgLVSJogI1ZcPY7lHto1YJODS_768BMwH2a_Vd7M62KokRRru4_HJ2adStVr9s0lxzLzt5xXWfqkZ2CbrBXz5XIFpaHRkga29Q8qNWalrZen0UqWZU7L4mYVNr3-2_FCTwMe51_-21ZDCKVYqboM7_QhlcH6xCykd9y6WPeH1_BTVftrNQCCeCyyjzf4LuwXWwarjHp6eLnMeluTe5hUiLpf7iYeTV_8stqr914dqIBAAhci5hS_00Gpm3sSS3_H26kpYFqA9bPhxTKR4w=w1887-h891-no?authuser=0'
        },
        {
            id: 6,
            type: 'react',
            heading: 'React Js',
            name: 'Portfolio',
            link: 'https://portfolio-two-umber-76.vercel.app/',
            image: 'https://lh3.googleusercontent.com/PRSJhwgBy87JMwtxsRL1-0e_0wOSjBQMfpBur7ByjF87pJPZvpNdp2pW-DbkQqnBCrhQ-YGe9e7pv8f1Vgc9-3q3WF_Czi9ZaF0xe_e7MBoTjOV_1l3bGqw0R1NYHFXYKasmJu5NfZoEez0JBkDra5Rx_u7hyvnyMnNJIKsB7BCbvD_PgfBpdeKzuJvm70LT9TsvmrHgN8ZNOV3knxCnTV2Y9O7cHFXjPJ9p4L9j7M3dUzNfnQi_T-7go7Wua31u7HBrogXyTJVvBqWm7LsZPek-XM7JLYVyt94FrPthGnu4RJiSM6tRH3PP7sPnJpHoAfjFYQwrOyIJPrEV5pGsbN74gLuh3kvhL5_7i-VNXGGuYtarV3DKrfOFRp-SxAjzCvemMsI3eFIH_mzZbCW8PicQNXIg8T6FZIwFnkdyq5BaO8HW_qLZLMfLaDkygMJqpC9dyay1N1qc_i3ReTaLxt8M-YjzOC6k3qwjgfdn2Fto51OwVrHLtNvbc5jAGlW8LDid2hEUZqx-VQvm9Q44cILcN2YnhEzG0-IrtMTRG8pKTJPHdKI7lGS5U0gRfdmzLGZx9mjqzg3qeiS_qbHxVM81uYnjQwNzSCV2qGI9QSw5YI84-y98myiu4nq46nRfnllKhzqIT8wD2osZLcu4Ki8WX6O5_T4iccHe0X9_dlkUJzKP3QRCYBrvnvU1ckmeQfxnCT_G3v6MlNzXa9wIY3G9CXz1B525gQpD6sJKQWBUkIQAju6vHTDugNFN1BJiPIMLE1Di8QKQn7L6FjT7CWBErnwgoXlJvLD8qP-pcSLeFDgInowDaaYclvbESCYFsPjrCuo-1opazkwcQ8VkyObx3W3RFHg9kR2MX75yhRnAGk-Jx74eUVGbBxsth-J1pWwHctxa3o28DLRqZABFsLZl3fHfogjMGmAivw=w1919-h899-no?authuser=0'
        },
        {
            id: 7,
            type: 'angular',
            heading: 'Angular Js',
            name: 'Currency Converter',
            link: 'https://github.com/Jafarl1/Currency-Converter-Angular/tree/main/converter',
            image: 'https://lh3.googleusercontent.com/Vy3RBORqXOegefewzR4xgZEytLOVBTqmZd4kvxTVtJdY4rTbl4wr8XXqdcmBHrPf4lOsS2iY9ps3nIO4Q12pd_GXThUAQJkZwt9aYsYxu0nTTXtQZ47OAOODLecxK95gljAk9E_go1HV3BpdnQagR9Ml_Q-gVp4tEROZfi9bHbvdCrg4hDiWLtVTCWeVmNRcvnV4Iluk1Nex783liYXCLva3ZgZ0r-f3WruPDi_ckdY4pEP2LbL--OIeDmx7d-7IJ2FLm--SZwwPDDJnGcqJZxBO3Uqlqmdu3m7OlI2fmDTdgeXRVFpgi0tbGUJEiQpAL90v2pgEDoP0pWgUQX1oTg071sEunjvhoTKeMuuJqU5e26wcdyn8lpryDkZxCWgSKd39MZkmTVpQWZFl6pzMGwKcjxKNBbLq0PwRElur-43VZer0ogLuyaiSqIXWh9Es9oaSfOJueNAS7I6p8ksqv0DTe2NRK7LGTJD1MvUN76gKdkzQOuwSX7C2ZlgqINS8H8H5dI--kpJjgxY_4Z2wCYxSGZ7QCveW31sONj-dWV0UfNJVRZwrjnXKpqqAcDghMIZTNMPF7P1A7FHnI0UXmxeRb-BB5R1k-0wORI7bX4G6SSxMdZywx-9W7erz0jDSMWAUg6ySPVIEAug3jjNTNMu__fCvGjivRktM3ccBNszZJhuoMKfIz02Yd9h1M1qVfYKJgiT2j1CexQ2_k4gFXkmTXOm9Y8qYgGNMWMAb18V0dje3wDw0LAc2_EY=w1889-h893-no?authuser=0'
        },
        {
            id: 8,
            type: 'vue',
            heading: 'Vue Js',
            name: 'Money Transfer',
            link: 'https://github.com/Jafarl1/Money-Transfer/tree/main/transfer/transfer-app',
            image: 'https://lh3.googleusercontent.com/zwxV6tPsjiJI3FEnQTI1GYA03TSHqUiwrqNqilQ_kUd59vORiZ-TSO9kpLY_s3DSUMUOYH1nUXYpajDYkN1g6H5EXI61rNRmPBipJxuLV8uwQmMzBE0XjHRN6h4qegfx5HHLow1SUeVY-hKcFZToLqCzDreLSVy0W-8BuCQAzA3hBmMDeEaqJEnQ9P6PJbsbQtfClkqdWFY8mR6_9g4mpcAJUiHvT4bXhsAibV6VX-QOc9aVXfo6sIcAl8p3ftoQC_WxIw3A_1Ijjh8HOjyHpzJdxSsIjV3JnzZp6lCMpEXZYiAJjaKo9vAlyuLZU9lcHj_VxCU_XpBGoIG3C2LhgKYv1iqME0cI-BaGiW09Hcx6x3C4njooP41I9Mu3RUzXerQM558lQU5uZdy3YZmIJYKLx-DxUecjq8e2U3Y-oqKw--n6lfkQ5AXVleuOw4o7dQFr4GzA9-wx8o8kMZKY7_JMojceB2WkcokbBXrOhYeqTPc6Dr0WxNKUBdm-p9-UxZlmwtyhQAp09C6eDvsCJMH0S2wUDDm_dQAlstiFp32Y1cXGw-oknYLFetP7Nw4jz0KsigEq_PwgDj_GDZ53pTy0L8GzIm7UFzePYL6cKdTDZ21NHhEy5y57JZiZhTtcQ-u3Or5uUCnAni5DIyMQQJwYqInC9Dy27Ew6ahEXNrCPob7j-37zIxdqYtUN6mfk02Ol3SfZaQD_0B5a3yK3jfN9tgkCtMq6GBS2gsnOcYjfvSCfs1PwCwGZU8Y=w1895-h891-no?authuser=0'
        }
    ]
};

export default function reducer(state = initState) {
    return state
}