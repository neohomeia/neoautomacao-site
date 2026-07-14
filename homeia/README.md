# HomeIA — protótipo local

Protótipo de consultor de automação residencial para a NeoHome Automação.

## O que já funciona

- Quiz responsivo em quatro etapas para cliente leigo;
- Modo cliente inicial, sem login;
- Dados demonstrativos pelo botão **Carregar exemplo**;
- Mapa de experiências em linguagem simples;
- Recomendações gerais sem jargão técnico;
- Simulação local de pedido de contato;
- Impressão e salvamento em PDF pelo navegador;
- Estrutura preparada para substituir o motor local por uma IA real futuramente.
- Separação futura entre jornada pública e projeto técnico interno.

## Como executar

1. Instale o Python 3 caso ainda não esteja instalado.
2. Abra o PowerShell nesta pasta `homeia`.
3. Execute:

```powershell
python -m http.server 8765
```

4. Abra `http://localhost:8765` no computador.

Para abrir no celular conectado à mesma rede Wi‑Fi, descubra o IPv4 do computador com `ipconfig` e acesse `http://SEU-IP:8765`.

## Próximos passos recomendados

1. Validar o formulário com clientes e instaladores;
2. Criar um modo instalador com marca, modelo, protocolo, hub e neutro;
3. Salvar diagnósticos em banco de dados;
4. Conectar um provedor de IA para personalização;
5. Publicar em hospedagem com domínio da NeoHome.

## Estratégia para marcas e modelos

Não vamos tentar cadastrar milhares de produtos diretamente no formulário. A evolução recomendada é:

1. Manter um catálogo técnico separado, com marca, modelo, tipo, protocolo, aplicativo e integrações conhecidas;
2. Começar com as marcas mais usadas pela NeoHome;
3. Importar novos itens por planilha CSV ou Excel;
4. Guardar o catálogo em banco de dados quando o sistema for publicado;
5. Usar o catálogo para sugerir, mas sempre mostrar a mensagem de compatibilidade sujeita à verificação.

Nesta etapa local, o formulário aceita texto livre para marca e modelo. Isso permite testar com clientes sem bloquear o atendimento por falta de cadastro.
