create table if not exists public.ai_usages (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  action text not null,
  created_at timestamptz not null default now()
);

create index if not exists ai_usages_user_id_created_at_idx
on public.ai_usages (user_id, created_at desc);

alter table public.ai_usages enable row level security;

drop policy if exists "Users can read own AI usages" on public.ai_usages;
create policy "Users can read own AI usages"
on public.ai_usages
for select
to authenticated
using (auth.uid() = user_id);

drop policy if exists "Users can create own AI usages" on public.ai_usages;
create policy "Users can create own AI usages"
on public.ai_usages
for insert
to authenticated
with check (auth.uid() = user_id);
