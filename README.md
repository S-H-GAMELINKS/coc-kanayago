# coc-kanayago

coc.nvim extension for Kanayago Language Server Protocol.

## Install

`:CocInstall coc-kanayago`

## Features

- Syntax error detection for Ruby files
- Real-time diagnostics with error location information

## Configuration

Add to your coc-settings.json:

```json
{
  "coc-kanayago.enable": true,
  "coc-kanayago.command": "kanayago"
}
```

## Keymaps

Navigate between diagnostics (errors):

```vim
" Jump to next diagnostic
nmap <silent> <space>dn <Plug>(coc-diagnostic-next)

" Jump to previous diagnostic
nmap <silent> <space>dp <Plug>(coc-diagnostic-prev)
```

Show diagnostic information at cursor position:

```vim
" Show diagnostic message
nmap <silent> <space>di <Plug>(coc-diagnostic-info)
```

## License

MIT

---

> This extension is built with [create-coc-extension](https://github.com/fannheyward/create-coc-extension)
