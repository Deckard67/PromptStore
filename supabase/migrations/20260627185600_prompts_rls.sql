alter table public.prompts enable row level security;

drop policy if exists "Users can read own prompts" on public.prompts;
create policy "Users can read own prompts"
on public.prompts
for select
to authenticated
using (auth.uid() = user_id);

drop policy if exists "Anyone can read public prompts" on public.prompts;
create policy "Anyone can read public prompts"
on public.prompts
for select
to anon, authenticated
using (public = true);

drop policy if exists "Users can create own prompts" on public.prompts;
create policy "Users can create own prompts"
on public.prompts
for insert
to authenticated
with check (auth.uid() = user_id);

drop policy if exists "Users can update own prompts" on public.prompts;
create policy "Users can update own prompts"
on public.prompts
for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists "Users can delete own prompts" on public.prompts;
create policy "Users can delete own prompts"
on public.prompts
for delete
to authenticated
using (auth.uid() = user_id);
