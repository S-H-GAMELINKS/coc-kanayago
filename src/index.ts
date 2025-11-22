import { ExtensionContext, LanguageClient, LanguageClientOptions, ServerOptions, services, workspace } from 'coc.nvim';

export async function activate(context: ExtensionContext): Promise<void> {
  const config = workspace.getConfiguration('coc-kanayago');
  const isEnable = config.get<boolean>('enable', true);

  if (!isEnable) {
    return;
  }

  const command = config.get<string>('command', 'kanayago');
  const serverOptions: ServerOptions = {
    command,
    args: ['--lsp'],
  };

  const clientOptions: LanguageClientOptions = {
    documentSelector: [
      { scheme: 'file', language: 'ruby' }
    ],
    synchronize: {
      configurationSection: 'coc-kanayago',
    },
  };

  const client = new LanguageClient(
    'coc-kanayago',
    'Kanayago Language Server',
    serverOptions,
    clientOptions
  );

  context.subscriptions.push(services.registLanguageClient(client));
}
