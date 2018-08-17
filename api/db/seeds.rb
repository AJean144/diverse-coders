5.times do 
    JobPost.create({
        title: Faker::Job.title,
        category: Faker::Job.field,
        headquarters: Faker::Job.seniority,
        job_description: Faker::Job.position,
        how_to_apply: Faker::Job.employment_type,
        company_name: Faker::Job.key_skill,
        company_website: Faker::Job.employment_type,
        company_email: Faker::Job.employment_type
    })
end
