# Guia de Contribuição - OmniTask

Bem-vindo ao guia de contribuição do OmniTask! Este documento define os padrões, processos e fluxos de trabalho para garantir a qualidade e a consistência do nosso Monorepo Full Stack.

Este projeto segue princípios de **Clean Code**, **Gitflow** e **Integração Contínua**.

---

## 1. 🏗 Estrutura e Filosofia (XP & Agile)

### Organização do Monorepo

- `/backend`: API REST em Java 17 + Spring Boot 3.
- `/web`: Frontend SPA em Angular 17.
- `/mobile`: App Nativo em React Native + Expo.

### Princípios de Engenharia (XP)

- **KISS (Keep It Simple, Stupid):** A solução mais simples quase sempre é a melhor.
- **Integração Contínua:** Todo código enviado deve passar pelos testes automatizados (CI).
- **Código Limpo:** Variáveis com nomes significativos, métodos pequenos e responsabilidade única.
- **Review:** Nenhum código entra na branch principal sem passar por um Pull Request.

---

## 2. ⚙️ Preparação do Ambiente

Certifique-se de ter as seguintes ferramentas instaladas:

- **Java JDK 17** (Eclipse Temurin recomendado).
- **Node.js 18** (LTS).
- **Maven** (Opcional, pois usamos o wrapper `mvnw`).
- **Git**.

---

## 3. 🌿 Fluxo de Trabalho (Gitflow)

Utilizamos uma adaptação robusta do Gitflow. Nunca commite diretamente na `main` ou `develop`.

### As Branches

- `main`: **Produção**. Código estável, testado e versionado (Tags v1.0, v1.1).
- `develop`: **Integração**. Onde as features se encontram para testes integrados.
- `feature/nome-da-tarefa`: **Desenvolvimento**. Onde você trabalha no dia a dia.
- `fix/nome-do-bug`: **Correções**. Para resolver bugs encontrados na develop.
- `chore/nome-da-tarefa`: **Manutenção**. Configurações, docs, CI/CD (sem alteração de código produtivo).

### Passo a Passo da Contribuição

**1. Comece atualizando sua base**

```bash
git checkout develop
git pull origin develop
```

**2. Crie sua branch de trabalho O nome deve ser claro e curto.**

```
Exemplo: Criando a tela de login
git checkout -b feature/tela-login
```

**3. Desenvolvimento e Commits Faça commits pequenos e atômicos. Siga o padrão Conventional Commits:**

- `feat`: Nova funcionalidade.
- `fix`: Correção de bug.
- `docs`: Alteração apenas na documentação.
- `style`: Formatação (espaços, ponto e vírgula, sem mudar lógica).
- `refactor`: Refatoração de código (sem mudar funcionalidade).
- `test`: Adição ou correção de testes.
- `chore`: Alterações de build, ferramentas, bibliotecas.

Exemplo:

```
git commit -m "feat: implementa validação de email no login"
```

**4. Sincronização (Evitando Conflitos) Antes de subir, verifique se a develop mudou.**

```
git fetch origin
git merge origin/develop
# Se houver conflitos, resolva-os agora no VS Code.
```

**5. Envio (Push)**

```
git push -u origin feature/tela-login
```

---

## 4. 🔀 Processo de Pull Request (Definition of Done)

Para considerar uma tarefa "Pronta" (Done) no Scrum, ela deve passar pelo PR.

1. Abra o PR no GitHub apontando para a `develop`.
2. Preencha o template de descrição (Objetivo, Tipo de Mudança, Como Testar).
3. Aguarde o CI/CD: O GitHub Actions vai rodar automaticamente:
   - Build do Backend (Maven).
   - Instalação e verificação do Frontend (Web/Mobile).
   - Se ficar ❌ Vermelho: Corrija o erro localmente, commite e suba de novo (o PR atualiza sozinho).
   - Se ficar ✅ Verde: O código está seguro.

### Checklist de Qualidade (DoD)

- [ ] O código compila sem erros.
- [ ] Não há "logs" esquecidos (`console.log`, `System.out.println`) desnecessários.
- [ ] O código segue o padrão de formatação do projeto.
- [ ] Novas dependências foram adicionadas corretamente (`package.json` ou `pom.xml`).
- [ ] O CI (GitHub Actions) passou com sucesso.

---

## 5. 🧪 Testes e Qualidade

Embora sejamos ágeis, não quebramos a build.

- **Backend**: Antes de subir, rode `mvn test` para garantir que nada quebrou.

- **Mobile**: Cuidado com o `package-lock.json`. Se instalar lib nova, use `npm install`. O CI valida a integridade desse arquivo rigorosamente.

---

## 6. 🚀 Versionamento (Releases)

Quando a branch `develop` estiver estável e pronta para ir para produção (main), um mantenedor deve:

1. Abrir PR de `develop` para `main`.
2. Após o merge, criar uma Tag Semântica:
   - v1.0.0 -> Major.Minor.Patch
   - Patch: Bug fixes.
   - Minor: Novas features (sem quebrar compatibilidade).
   - Major: Mudanças drásticas.

##### _"Documentação é o amor que você deixa para os desenvolvedores que virão depois de você — inclusive o seu 'eu' futuro."_
